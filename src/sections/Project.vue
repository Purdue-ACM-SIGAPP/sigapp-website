<template>
  <section id="project" class="bg-white min-h-screen px-8 py-16 flex flex-col items-center">
    <!-- Top Row -->
    <div class="w-full max-w-screen-xl flex flex-wrap justify-between items-start mb-12">
      <!-- Left: Heading + Dots -->
      <div>
        <h2 class="text-3xl font-bold text-black mb-2">
          Our Past, Present, and Future Projects
        </h2>
        <!-- Dot Indicators -->
        <DottedLine />
      </div>

      <!-- Right: Quote -->
      <div class="text-right max-w-md text-sm text-black mt-4 md:mt-0">
        <p>
          “I had a great time <br />
          building up my engineering skills <br />
          while making connections in club” – Someone’s name
        </p>
      </div>
    </div>

    <!-- Bottom: Three boxes -->
    <div class="flex flex-wrap justify-center gap-6 w-full max-w-screen-xl">
      <!-- Left Green Box -->
      <div class="w-[280px] h-[360px] bg-[#4B5A48] rounded-3xl"></div>
      <!-- Center Black Box -->
      <div class="w-[280px] h-[360px] bg-black rounded-3xl"></div>
      <!-- Right Green Box -->
      <div class="w-[280px] h-[360px] bg-[#4B5A48] rounded-3xl"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DottedLine from '../components/DottedLine.vue';
</script>