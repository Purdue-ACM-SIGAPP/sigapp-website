<template>
  <div
    class="relative w-full rounded-2xl overflow-hidden shadow-lg bg-gray-100"
  >
    <button
      type="button"
      class="relative w-full block cursor-zoom-in focus-visible:outline-none"
      aria-label="View larger team photo with names"
      @click="openModal"
    >
      <img
        :src="photo"
        :alt="alt"
        class="w-full h-auto block"
        draggable="false"
        loading="lazy"
        decoding="async"
      />

      <svg
        v-if="regions?.length"
        class="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon
          v-for="region in regions"
          :key="region.name"
          :points="toPointsAttr(region.points)"
          :class="[
            'transition-colors duration-150',
            hoveredName === region.name
              ? 'fill-dark-green/45 stroke-dark-green'
              : 'fill-transparent stroke-transparent',
          ]"
          stroke-width="0.3"
          vector-effect="non-scaling-stroke"
          @mouseenter="setHover(region.name)"
          @mouseleave="setHover(null)"
        />
      </svg>

      <span
        class="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/55 text-white text-xs font-medium px-2.5 py-1 rounded-full pointer-events-none"
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
          <path d="M9 6.5V11.5M6.5 9H11.5" stroke-linecap="round" />
        </svg>
        Tap to see names
      </span>
    </button>

    <Teleport to="body">
      <Transition name="modal-fade">
        <div
          v-if="modalOpen"
          class="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/70"
          @click.self="closeModal"
        >
          <div class="relative w-full max-w-3xl">
            <button
              type="button"
              class="absolute -top-3 -right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-lg transition hover:bg-gray-100"
              aria-label="Close"
              @click="closeModal"
            >
              <span class="text-lg leading-none">&times;</span>
            </button>

            <div
              ref="modalImageWrap"
              class="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100"
              @mousemove="onMouseMove"
              @mouseleave="setHover(null)"
            >
              <img
                :src="photo"
                :alt="alt"
                class="w-full h-auto block select-none"
                draggable="false"
              />

              <svg
                v-if="regions?.length"
                class="absolute inset-0 w-full h-full"
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
                  @click="selectRegion(region, $event)"
                />
              </svg>

              <div
                v-if="hoveredName"
                class="pointer-events-none absolute z-10 whitespace-nowrap rounded-full bg-black/80 px-3 py-1 text-sm font-medium text-white shadow-lg"
                :style="tooltipStyle"
              >
                {{ hoveredName }}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from "vue";
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

const modalOpen = ref(false);
const hoveredName = ref<string | null>(null);
const modalImageWrap = ref<HTMLElement | null>(null);
const tooltipPos = ref({ x: 0, y: 0 });

const tooltipStyle = computed(() => ({
  left: `${tooltipPos.value.x + 16}px`,
  top: `${tooltipPos.value.y + 16}px`,
}));

function toPointsAttr(points: [number, number][]) {
  return points.map(([x, y]) => `${x},${y}`).join(" ");
}

function setHover(name: string | null) {
  hoveredName.value = name;
  emit("hover", name);
}

function updateTooltipPos(event: MouseEvent) {
  const rect = modalImageWrap.value?.getBoundingClientRect();
  if (!rect) return;
  tooltipPos.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

function onMouseMove(event: MouseEvent) {
  updateTooltipPos(event);
}

function selectRegion(region: PhotoRegion, event: MouseEvent) {
  setHover(region.name);
  updateTooltipPos(event);
  emit("select", region.name);
}

function openModal() {
  modalOpen.value = true;
}

function closeModal() {
  modalOpen.value = false;
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") closeModal();
}

watch(modalOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
  if (open) {
    document.addEventListener("keydown", onKeydown);
  } else {
    document.removeEventListener("keydown", onKeydown);
    hoveredName.value = null;
  }
});

onUnmounted(() => {
  document.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active > div,
.modal-fade-leave-active > div {
  transition: transform 0.2s ease;
}
.modal-fade-enter-from > div,
.modal-fade-leave-to > div {
  transform: scale(0.95);
}

@media (prefers-reduced-motion: reduce) {
  .modal-fade-enter-active,
  .modal-fade-leave-active,
  .modal-fade-enter-active > div,
  .modal-fade-leave-active > div {
    transition: none;
  }
}
</style>
