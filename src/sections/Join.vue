<template>
  <section id="join" class="px-8 py-16 relative overflow-hidden">
    <div class="text-lg font-semibold mb-8 text-center">
      Whether you're a coder, designer, or just curious — we’d love to have you!
    </div>
    <!-- Zigzag boxes -->
    <div
      class="flex justify-center gap-6 flex-wrap max-w-screen-xl mx-auto py-8"
    >
      <div
        class="text-center justify-center flex items-center w-52 h-52 bg-black text-white rounded-3xl translate-y-8"
      >
        Build apps that people actually use
      </div>
      <div
        class="text-center justify-center flex items-center w-52 h-52 bg-dull text-white rounded-3xl -translate-y-8"
      >
        Learn modern dev workflows
      </div>
      <div
        class="text-center justify-center flex items-center w-52 h-52 bg-black text-white rounded-3xl translate-y-8"
      >
        Join a welcoming community
      </div>
      <div
        class="text-center justify-center flex items-center w-52 h-52 bg-dull text-white rounded-3xl -translate-y-8"
      >
        Gain experience that looks great on your resume
      </div>
      <div
        class="text-center justify-center flex items-center w-52 h-52 bg-black text-white rounded-3xl translate-y-8"
      >
        No experience required — just bring curiosity!
      </div>
    </div>
    <!-- Dots: Bottom right -->
    <div class="absolute bottom-0 right-0 pb-4 pr-4">
      <DottedLine />
    </div>
  </section>
</template>

<script setup>
import DottedLine from "../components/DottedLine.vue";
</script>
