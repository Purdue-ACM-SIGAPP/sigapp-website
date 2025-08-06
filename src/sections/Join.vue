<template>
  <section id="join" class="bg-white px-8 py-16 relative overflow-hidden">
    <!-- Zigzag boxes -->
    <div class="flex justify-center gap-6 flex-wrap max-w-screen-xl mx-auto">
      <!-- Box 1 -->
      <div class="w-52 h-52 bg-black rounded-3xl translate-y-8"></div>
      <!-- Box 2 -->
      <div class="w-52 h-52 bg-[#4B5A48] rounded-3xl -translate-y-8"></div>
      <!-- Box 3 -->
      <div class="w-52 h-52 bg-black rounded-3xl translate-y-8"></div>
      <!-- Box 4 -->
      <div class="w-52 h-52 bg-[#4B5A48] rounded-3xl -translate-y-8"></div>
      <!-- Box 5 -->
      <div class="w-52 h-52 bg-black rounded-3xl translate-y-8"></div>
    </div>

    <!-- Dots: Bottom right -->
    <DottedLine />
  </section>
</template>

<script setup>
import DottedLine from "../components/DottedLine.vue";
</script>