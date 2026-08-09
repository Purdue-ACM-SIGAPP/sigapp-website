<template>
  <canvas ref="canvasRef" class="block w-full h-full" aria-hidden="true" />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

// Animated mesh-gradient background, inspired by shadergradient.co —
// a lightweight hand-rolled WebGL version (no three.js) domain-warping
// simplex noise across the site's brand colors.
const props = withDefaults(
  defineProps<{
    colors?: [string, string, string, string];
    speed?: number;
    // Higher = more turbulent/grainy (adds a finer high-frequency noise
    // octave on top of the base domain warp); 1 = original smooth look.
    noise?: number;
  }>(),
  {
    colors: () => ["#438d5e", "#d3efc3", "#89b08a", "#1c1c1c"],
    speed: 0.12,
    noise: 1,
  },
);

const canvasRef = ref<HTMLCanvasElement | null>(null);
let gl: WebGLRenderingContext | null = null;
let rafId = 0;
let program: WebGLProgram | null = null;
let resizeObserver: ResizeObserver | null = null;
let uTimeLoc: WebGLUniformLocation | null = null;
let uResolutionLoc: WebGLUniformLocation | null = null;
let uNoiseLoc: WebGLUniformLocation | null = null;

const VERT_SRC = `
  attribute vec2 aPosition;
  void main() {
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`;

const FRAG_SRC = `
  precision highp float;
  uniform vec2 uResolution;
  uniform float uTime;
  uniform float uNoise;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  uniform vec3 uColorD;

  // Ashima Arts simplex noise (MIT)
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
              + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float warped(vec2 uv, float t) {
    vec2 warp = vec2(
      snoise(uv * 1.3 * uNoise + t * 0.6),
      snoise(uv * 1.3 * uNoise - t * 0.5)
    );
    float base = snoise(uv * 1.1 * uNoise + warp * 0.9 + t * 0.25);
    // Extra high-frequency octave layered on top — this is what actually
    // reads as "noise" (fine grain/turbulence) rather than smooth blobs.
    float fine = snoise(uv * 3.6 * uNoise + warp * 1.7 - t * 0.4);
    float grain = snoise(uv * 9.0 * uNoise - t * 0.9);
    float detail = (uNoise - 1.0) / max(uNoise, 1.0);
    return base + fine * 0.45 * detail + grain * 0.18 * detail;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    uv.x *= uResolution.x / uResolution.y;

    float n1 = warped(uv * 1.4, uTime);
    float n2 = warped(uv * 1.8 + 5.2, uTime * 0.8);

    float mixA = smoothstep(-0.6, 0.6, n1);
    float mixB = smoothstep(-0.5, 0.7, n2);

    vec3 col = mix(uColorA, uColorB, mixA);
    col = mix(col, uColorC, mixB * 0.6);
    col = mix(col, uColorD, smoothstep(0.75, 1.0, n1 * n2 + 0.3) * 0.18);

    gl_FragColor = vec4(col, 1.0);
  }
`;

function hexToVec3(hex: string): [number, number, number] {
  const n = parseInt(hex.replace("#", ""), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function compileShader(
  context: WebGLRenderingContext,
  type: number,
  src: string,
) {
  const shader = context.createShader(type)!;
  context.shaderSource(shader, src);
  context.compileShader(shader);
  if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
    console.error(context.getShaderInfoLog(shader));
  }
  return shader;
}

function resize() {
  const canvas = canvasRef.value;
  if (!canvas || !gl) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  const { clientWidth, clientHeight } = canvas;
  const w = Math.max(1, Math.floor(clientWidth * dpr));
  const h = Math.max(1, Math.floor(clientHeight * dpr));
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
    gl.viewport(0, 0, w, h);
  }
}

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  gl = canvas.getContext("webgl", {
    antialias: true,
    premultipliedAlpha: false,
  });
  if (!gl) return;
  const context = gl;

  program = context.createProgram()!;
  context.attachShader(
    program,
    compileShader(context, context.VERTEX_SHADER, VERT_SRC),
  );
  context.attachShader(
    program,
    compileShader(context, context.FRAGMENT_SHADER, FRAG_SRC),
  );
  context.linkProgram(program);
  context.useProgram(program);

  const posBuffer = context.createBuffer();
  context.bindBuffer(context.ARRAY_BUFFER, posBuffer);
  context.bufferData(
    context.ARRAY_BUFFER,
    new Float32Array([-1, -1, 3, -1, -1, 3]),
    context.STATIC_DRAW,
  );
  const aPosition = context.getAttribLocation(program, "aPosition");
  context.enableVertexAttribArray(aPosition);
  context.vertexAttribPointer(aPosition, 2, context.FLOAT, false, 0, 0);

  uTimeLoc = context.getUniformLocation(program, "uTime");
  uResolutionLoc = context.getUniformLocation(program, "uResolution");
  uNoiseLoc = context.getUniformLocation(program, "uNoise");
  context.uniform1f(uNoiseLoc, props.noise);
  const [a, b, c, d] = props.colors;
  context.uniform3fv(
    context.getUniformLocation(program, "uColorA"),
    hexToVec3(a),
  );
  context.uniform3fv(
    context.getUniformLocation(program, "uColorB"),
    hexToVec3(b),
  );
  context.uniform3fv(
    context.getUniformLocation(program, "uColorC"),
    hexToVec3(c),
  );
  context.uniform3fv(
    context.getUniformLocation(program, "uColorD"),
    hexToVec3(d),
  );

  resize();
  resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const start = performance.now();

  const draw = (now: number) => {
    if (!gl) return;
    const t = ((now - start) / 1000) * props.speed;
    gl.uniform1f(uTimeLoc, t);
    gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (!reduceMotion) rafId = requestAnimationFrame(draw);
  };

  if (reduceMotion) {
    draw(start + 1000);
  } else {
    rafId = requestAnimationFrame(draw);
  }
});

onUnmounted(() => {
  cancelAnimationFrame(rafId);
  resizeObserver?.disconnect();
  if (gl && program) {
    gl.deleteProgram(program);
  }
  gl = null;
});
</script>
