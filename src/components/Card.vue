<template>
  <div class="flex flex-col items-center gap-4 max-w-xs">
    <!-- Flip Card -->
    <div class="aspect-square w-full group perspective">
      <div
        class="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180"
      >
        <!-- Front Face -->
        <div
          class="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            :src="image"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Back Face -->
        <div
          class="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl bg-white flex items-center justify-center p-6 text-center shadow-xl"
        >
          <slot>
            <p class="text-dark font-medium text-sm leading-relaxed">
              {{ description }}
            </p>
          </slot>
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
import { defineProps } from 'vue'

defineProps<{
  image: string
  description?: string
  name?: string
}>()
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
