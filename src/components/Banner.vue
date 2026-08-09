<template>
  <div
    class="w-full bg-light-green text-dark py-3 shadow-md mb-6 overflow-hidden"
  >
    <div v-if="reduceMotion" class="text-center px-6">
      <p class="font-semibold">{{ message }}</p>
    </div>

    <div v-else class="marquee-track flex whitespace-nowrap">
      <span class="marquee-copy flex items-center">
        <span
          v-for="n in 4"
          :key="n"
          class="flex items-center gap-3 font-semibold px-4"
        >
          {{ message }}
          <span class="text-dark-green" aria-hidden="true">✦</span>
        </span>
      </span>
      <span class="marquee-copy flex items-center" aria-hidden="true">
        <span
          v-for="n in 4"
          :key="n"
          class="flex items-center gap-3 font-semibold px-4"
        >
          {{ message }}
          <span class="text-dark-green" aria-hidden="true">✦</span>
        </span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const message =
  "🚀 Build the projects you wish existed. Come join us for spring 2026! We look forward to seeing you! 🤩";

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
</script>

<style scoped>
.marquee-track {
  width: max-content;
  animation: marquee 26s linear infinite;
}
.marquee-track:hover {
  animation-play-state: paused;
}
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
