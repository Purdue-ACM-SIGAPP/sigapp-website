<template>
  <div class="relative w-full h-full" aria-hidden="true">
    <!-- React's createRoot takes ownership of containerRef's children and
         clears anything already inside it on mount, so the noise overlay
         must be a sibling here, not nested inside the React mount point. -->
    <div ref="containerRef" class="absolute inset-0" />
    <div
      class="absolute inset-0 pointer-events-none"
      :style="{
        backgroundImage: noiseUrl,
        backgroundSize: `${NOISE_GRID}px ${NOISE_GRID}px`,
        mixBlendMode: 'overlay',
        opacity: 0.5,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import type { Root } from "react-dom/client";
import {
  mountShaderGradient,
  type ShaderGradientOptions,
} from "./shaderGradientMount";

// Renders the real shadergradient.co library (@shadergradient/react), which
// only ships a React/react-three-fiber build. We mount an isolated React
// root into this container and unmount it when this Vue component goes away.
const props = withDefaults(
  defineProps<{
    colors?: [string, string, string];
    speed?: number;
    strength?: number;
    frequency?: number;
    type?: "plane" | "sphere" | "waterPlane";
  }>(),
  {
    colors: () => ["#d7efff", "#cae6d5", "#ffcadf"],
    speed: 0.15,
    strength: 2.2,
    frequency: 3.5,
    type: "plane",
  },
);

const containerRef = ref<HTMLElement | null>(null);
let root: Root | null = null;

// The shader library's own film-grain pass rendered as near-solid black
// once the mask was opened up to show more of the gradient (a real bug in
// that pass). This is a fine, photographic-grain-style texture instead —
// a small tile of random-opacity 1px flecks, left at native size (no
// upscaling/pixelated rendering) so it reads as fine grain rather than a
// blocky mosaic.
const NOISE_GRID = 96;
function buildNoiseUrl(): string {
  let rects = "";
  for (let i = 0; i < NOISE_GRID * NOISE_GRID * 0.35; i++) {
    const x = Math.floor(Math.random() * NOISE_GRID);
    const y = Math.floor(Math.random() * NOISE_GRID);
    const shade = Math.random() < 0.5 ? "#000" : "#fff";
    const opacity = (Math.random() * 0.5 + 0.1).toFixed(2);
    rects += `<rect x="${x}" y="${y}" width="1" height="1" fill="${shade}" fill-opacity="${opacity}"/>`;
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${NOISE_GRID} ${NOISE_GRID}">${rects}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

const noiseUrl = buildNoiseUrl();

onMounted(() => {
  if (!containerRef.value) return;
  const options: ShaderGradientOptions = {
    colors: props.colors,
    speed: props.speed,
    strength: props.strength,
    frequency: props.frequency,
    type: props.type,
  };
  root = mountShaderGradient(containerRef.value, options);
});

onUnmounted(() => {
  // Unmount async: React warns if you synchronously unmount a root while
  // it's still committing, which can happen during route/section teardown.
  const r = root;
  root = null;
  if (r) setTimeout(() => r.unmount(), 0);
});
</script>
