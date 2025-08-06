<template>
  <div class="w-[90%] md:w-[30%] h-[500px] bg-dull rounded-3xl overflow-hidden relative">
    <!-- Slides -->
    <div
      class="h-full w-full flex transition-transform duration-700"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(_, index) in slideCount"
        :key="index"
        class="w-full flex-shrink-0 h-full flex items-center justify-center"
      >
        <slot :name="`slide-${index}`" />
      </div>
    </div>

    <!-- Dot Indicators -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
      <span
        v-for="(_, index) in slideCount"
        :key="index"
        class="w-3 h-3 rounded-full cursor-pointer"
        :class="currentIndex === index ? 'bg-white' : 'bg-gray-400'"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, useSlots, defineEmits } from 'vue'

const emit = defineEmits<{
  (e: 'update:index', index: number): void
}>()

const slots = useSlots()
const currentIndex = ref(0)

// Automatically determine number of slides
const slideCount = Object.keys(slots).filter(key => key.startsWith('slide-')).length

let interval: ReturnType<typeof setInterval> | null = null

const goToSlide = (index: number) => {
  currentIndex.value = index
  emit('update:index', index)
}

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slideCount
    emit('update:index', currentIndex.value)
  }, 3000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>
