<template>
  <svg
    ref="svgRef"
    class="squiggle-line overflow-visible"
    :class="{ 'is-visible': isVisible }"
    width="132"
    height="22"
    viewBox="0 0 160 24"
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient
        :id="gradientId"
        x1="0"
        y1="0"
        x2="160"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stop-color="#d9d9d9" />
        <stop offset="20%" stop-color="#d3efc3" />
        <stop offset="40%" stop-color="#438d5e" />
        <stop offset="60%" stop-color="#1c1c1c" />
        <stop offset="80%" stop-color="#505e4e" />
        <stop offset="100%" stop-color="#89b08a" />
      </linearGradient>
    </defs>

    <path
      :id="pathId"
      class="squiggle-path"
      :d="pathD"
      :stroke="`url(#${gradientId})`"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      pathLength="100"
    />

    <circle v-if="!reduceMotion" r="3.5" fill="#438d5e" class="squiggle-dot">
      <animateMotion dur="3.5s" repeatCount="indefinite" rotate="auto">
        <mpath :href="`#${pathId}`" />
      </animateMotion>
    </circle>
  </svg>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "wave" | "zigzag";
  }>(),
  { variant: "wave" },
);

const PATHS = {
  wave: "M4,16 Q24,2 44,16 T84,16 T124,16 T156,16",
  zigzag: "M4,18 L26,4 L48,18 L70,4 L92,18 L114,4 L136,18 L156,9",
};

const pathD = PATHS[props.variant];
const uid = Math.random().toString(36).slice(2, 9);
const gradientId = `squiggle-grad-${uid}`;
const pathId = `squiggle-path-${uid}`;

const svgRef = ref<SVGSVGElement | null>(null);
const isVisible = ref(false);
const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (reduceMotion) {
    isVisible.value = true;
    return;
  }
  if (!svgRef.value) return;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer?.disconnect();
        }
      });
    },
    { threshold: 0.4 },
  );
  observer.observe(svgRef.value);
});

onUnmounted(() => observer?.disconnect());
</script>

<style scoped>
.squiggle-path {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  transition: stroke-dashoffset 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}
.is-visible .squiggle-path {
  stroke-dashoffset: 0;
}
.squiggle-dot {
  opacity: 0;
  transition: opacity 0.4s ease 0.7s;
}
.is-visible .squiggle-dot {
  opacity: 1;
}
</style>
