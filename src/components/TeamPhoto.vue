<template>
  <div
    class="relative w-full rounded-2xl overflow-hidden shadow-lg bg-gray-100"
  >
    <button
      type="button"
      class="relative w-full block focus-visible:outline-none"
      :class="zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'"
      :aria-pressed="zoomed"
      :aria-label="zoomed ? 'Zoom out of team photo' : 'Zoom in on team photo'"
      @click="onBackgroundClick"
    >
      <img
        :src="photo"
        :alt="alt"
        class="w-full h-auto block transition-transform duration-500 ease-out"
        :style="imgStyle"
        draggable="false"
        loading="lazy"
        decoding="async"
      />

      <svg
        v-if="regions?.length"
        class="absolute inset-0 w-full h-full transition-transform duration-500 ease-out"
        :style="imgStyle"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon
          v-for="region in regions"
          :key="region.name"
          :points="toPointsAttr(region.points)"
          :class="[
            'transition-colors duration-150 cursor-pointer',
            hoveredName === region.name
              ? 'fill-dark-green/45 stroke-dark-green'
              : 'fill-transparent stroke-transparent',
          ]"
          stroke-width="0.3"
          vector-effect="non-scaling-stroke"
          @mouseenter="setHover(region.name)"
          @mouseleave="setHover(null)"
          @click.stop="selectRegion(region)"
        />
      </svg>

      <span
        class="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/55 text-white text-xs font-medium px-2.5 py-1 rounded-full pointer-events-none transition-opacity"
      >
        <svg
          class="w-3.5 h-3.5"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <circle cx="9" cy="9" r="6" />
          <path d="M14 14L18 18" stroke-linecap="round" />
          <path
            v-if="!zoomed"
            d="M9 6.5V11.5M6.5 9H11.5"
            stroke-linecap="round"
          />
          <path v-else d="M6.5 9H11.5" stroke-linecap="round" />
        </svg>
        {{ zoomed ? "Zoom out" : "Zoom in" }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { PhotoRegion } from "../content/officers";

defineProps<{
  photo: string;
  alt: string;
  regions?: PhotoRegion[];
}>();

const emit = defineEmits<{
  hover: [name: string | null];
  select: [name: string];
}>();

const zoomed = ref(false);
const origin = ref("center");
const hoveredName = ref<string | null>(null);

const imgStyle = computed(() => ({
  transform: zoomed.value ? "scale(1.9)" : "scale(1)",
  transformOrigin: origin.value,
}));

function toPointsAttr(points: [number, number][]) {
  return points.map(([x, y]) => `${x},${y}`).join(" ");
}

function centroid(points: [number, number][]): [number, number] {
  const [sx, sy] = points.reduce(
    ([ax, ay], [x, y]) => [ax + x, ay + y],
    [0, 0],
  );
  return [sx / points.length, sy / points.length];
}

function setHover(name: string | null) {
  hoveredName.value = name;
  emit("hover", name);
}

function selectRegion(region: PhotoRegion) {
  const [x, y] = centroid(region.points);
  origin.value = `${x}% ${y}%`;
  zoomed.value = true;
  emit("select", region.name);
}

function onBackgroundClick(event: MouseEvent) {
  if (!zoomed.value) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    origin.value = `${x}% ${y}%`;
  }
  zoomed.value = !zoomed.value;
}
</script>
