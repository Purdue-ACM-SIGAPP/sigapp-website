<template>
  <section class="min-h-screen bg-white px-8 py-16 flex flex-col items-center">
    <!-- Header -->
    <div class="flex flex-col items-center mb-12">
      <DottedLine/>


      <!-- Title -->
      <h2 class="text-2xl md:text-3xl font-bold text-center">
        Say hello to our current <br />
        officers for 2025–2026!
      </h2>
    </div>

    <!-- Content Grid -->
    <div class="flex gap-6 items-start justify-center flex-wrap max-w-screen-xl w-full">
      <!-- Left Column -->
      <div class="flex flex-col gap-6">
        <!-- Top large black box -->
        <div class="w-64 h-64 bg-black rounded-3xl"></div>
        <!-- Bottom two green boxes -->
        <div class="flex gap-4">
          <div class="w-32 h-32 bg-[#4B5A48] rounded-2xl"></div>
          <div class="w-32 h-32 bg-[#4B5A48] rounded-2xl"></div>
        </div>
      </div>

      <!-- Center Column -->
      <div class="flex flex-col gap-6">
        <!-- Spacer for alignment -->
        <div class="h-[88px]"></div>
        <!-- Large black box -->
        <div class="w-96 h-64 bg-black rounded-3xl"></div>
      </div>

      <!-- Right Column -->
      <div class="flex flex-col gap-6">
        <div class="w-32 h-32 bg-[#4B5A48] rounded-2xl"></div>
        <div class="w-32 h-32 bg-[#4B5A48] rounded-2xl"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DottedLine from '../components/DottedLine.vue';
</script>