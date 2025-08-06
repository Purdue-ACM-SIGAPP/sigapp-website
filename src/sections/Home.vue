<template>
  <section 
    id="home" 
    class="min-h-screen flex items-center justify-center"
    :style="{ paddingTop: paddingTop + 50 + 'px' }"
  >
      <div class="px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl w-full">
      <div class="space-y-6 text-center md:text-left">
        <div>
          <h1 class="text-5xl font-bold">Purdue</h1>
          <h1 class="text-5xl font-bold">ACM SIGAPP</h1>
        </div>
        <DottedLine />
        <p class="text-lg text-gray-700">Purdue's premier app development club!</p>
        <a
          href="https://discord.gg/jKTWKYarGE"
          target="_blank"
          class="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Join our discord server
          <span class="ml-2">➡️</span>
        </a>
      </div>
      <div class="flex justify-center">
        <img :src="logo" alt="SIGAPP Logo" class="max-w-md w-full" />
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, watch } from "vue";
import { headerHeight } from "../globals";
import DottedLine from "../components/DottedLine.vue";
import logo from "../assets/logo.png"

const paddingTop = ref(headerHeight.value );

watch(headerHeight, (newHeight) => {
  paddingTop.value = newHeight;
});
</script>