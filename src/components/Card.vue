<template>
  <div class="flex flex-col items-center gap-4 max-w-xs">
    <!-- Flip Card -->
    <div
      class="aspect-square w-full group perspective transition-transform duration-300 ease-out hover:scale-105 hover:-rotate-1"
      @click="isFlipped = !isFlipped"
    >
      <div
        class="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180"
        :class="{ 'rotate-y-180': isFlipped }"
      >
        <!-- Front Face -->
        <div
          class="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            :src="image"
            class="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <!-- Back Face -->
        <div
          class="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl bg-white flex flex-col items-center justify-center p-6 text-center shadow-xl gap-4"
        >
          <slot>
            <p class="text-dark font-medium text-sm leading-relaxed">
              {{ description }}
            </p>
          </slot>
          <img
            v-if="props.showLinkedin"
            :src="isLinkedinHovered ? icons.linkedinGreen : icons.linkedin"
            alt="LinkedIn"
            class="w-8 h-8 cursor-pointer transition-transform duration-150 active:scale-90"
            draggable="false"
            @click="openLinkedin"
            @mouseenter="isLinkedinHovered = true"
            @mouseleave="isLinkedinHovered = false"
          />
        </div>
      </div>
    </div>

    <!-- Name Below Card -->
    <div v-if="name" class="text-center font-semibold text-lg text-gray-900">
      {{ name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { icons } from "../content/site";

const props = defineProps<{
  image: string;
  description?: string;
  name?: string;
  showLinkedin?: string;
}>();

const isFlipped = ref(false);

const isLinkedinHovered = ref(false);

const openLinkedin = () => {
  if (props.showLinkedin) {
    window.open(props.showLinkedin, "_blank");
  }
};
</script>

<style scoped>
.perspective {
  perspective: 1000px;
}
.transform-style {
  transform-style: preserve-3d;
}
.backface-hidden {
  backface-visibility: hidden;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}
</style>
