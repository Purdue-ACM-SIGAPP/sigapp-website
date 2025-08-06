<template>
  <section
    id="about"
    class="min-h-screen flex flex-col items-start justify-center px-10 py-16 relative"
  >
    <h2 class="text-3xl font-bold mb-4">
      What is Purdue ACM SIGAPP <br />
      <span class="text-lg font-semibold">(AKA SIGAPP)</span>
    </h2>
    <DottedLine />

    <div class="relative mt-20 h-[500px] w-full max-w-7xl">
      <!-- Black box on right -->
      <div
        class="absolute right-0 bottom-0 w-[85%] h-[100%] bg-black rounded-3xl z-10"
      ></div>

      <!-- Gray box on left, overlapping -->
      <div
        class="absolute left-0 bottom-10 w-[40%] h-[60%] bg-[#4B5A48] rounded-3xl z-20"
      ></div>
    </div>
  </section>
</template>

<script setup>
import DottedLine from "../components/DottedLine.vue";
</script>
