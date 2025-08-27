<template>
  <div class="flex flex-col items-center gap-4 max-w-xs">
    <!-- Flip Card -->
    <div
      class="aspect-square w-full group perspective"
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
          <img :src="image" class="w-full h-full object-cover" />
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
            :src="isLinkedinHovered ? linkedin_green : linkedin"
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
import linkedin from "../assets/linkedin.png";
import linkedin_green from "../assets/linkedin_green.png";

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
