import { createElement } from "react";
import { createRoot, type Root } from "react-dom/client";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export interface ShaderGradientOptions {
  colors?: [string, string, string];
  speed?: number;
  strength?: number;
  frequency?: number;
  type?: "plane" | "sphere" | "waterPlane";
}

// shadergradient.co's own library (@shadergradient/react) is built on
// react-three-fiber and has no vanilla/Vue entry point. Rather than
// re-approximate its look by hand, we mount a small isolated React tree
// into a container owned by a Vue component and tear it down on unmount.
export function mountShaderGradient(
  container: HTMLElement,
  options: ShaderGradientOptions = {},
): Root {
  const {
    // Magenta + green, both deep/rich tones — lighter mid-tone hexes here
    // (e.g. #e0218a) washed pale under this shader's lighting, while these
    // stayed vivid.
    colors = ["#831843", "#166534", "#9d174d"],
    speed = 0.15,
    strength = 2.2,
    frequency = 3.5,
    type = "plane",
  } = options;

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const root = createRoot(container);
  root.render(
    createElement(ShaderGradientCanvas, {
      style: { position: "absolute", inset: 0 },
      pixelDensity: 2,
      fov: 45,
      lazyLoad: false,
      children: createElement(ShaderGradient, {
        control: "props",
        type,
        animate: reduceMotion ? "off" : "on",
        color1: colors[0],
        color2: colors[1],
        color3: colors[2],
        uSpeed: speed,
        uStrength: strength,
        uFrequency: frequency,
        // The previous cDistance (32) put the camera ~10x further from the
        // plane than shadergradient.co's own defaults (~3.6), which is why
        // the gradient looked tiny/"zoomed out" instead of filling its
        // container. cPolarAngle 90 is a straight-on front view.
        cAzimuthAngle: 180,
        cPolarAngle: 90,
        cDistance: 3.6,
        cameraZoom: 1,
        // The library's "halo" preset (its base defaults) bakes in a
        // tilted/offset plane (positionX -1.4, rotationY 10, rotationZ 50).
        // That tilt is what made one color dominate the whole visible
        // surface via lighting falloff, with the others only showing as
        // thin rim highlights. Facing the plane flat-on distributes all
        // three colors much more evenly.
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        // The library's built-in grain pass rendered as near-solid black
        // once the mask (Home.vue/Officer.vue) was opened up to show more
        // of the gradient — a real bug in that pass, not a look we want
        // regardless. A fine CSS noise overlay (ShaderGradientMesh.vue)
        // gives the film-grain texture instead, without that failure mode.
        grain: "off",
        brightness: 1.15,
      }),
    }),
  );
  return root;
}
