<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center"
    :style="{ paddingTop: paddingTop + 50 + 'px' }"
  >
    <div class="grid md:grid-cols-2 items-center gap-8 pb-[10%] max-w-5xl w-full">
      <div class="space-y-6 text-center md:text-left">
        <div>
          <h1 class="text-5xl font-bold">Purdue</h1>
          <h1 class="text-5xl font-bold">ACM SIGAPP</h1>
        </div>
        <DottedLine />
        <p class="text-lg text-gray-700">
          Purdue's premier app development club!
        </p>

        <button
          @click="handleClick"
          type="button"
          class="inline-flex items-center bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition"
        >
          <span class="pl-6 pr-3 py-3">Join our discord server</span>
          <span
            class="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center"
          >
            <img :src="arrow" alt="arrow" class="w-5 h-5" draggable="false" />
          </span>
          <span class="ml-1"></span>
        </button>
      </div>
      <div class="flex justify-center">
        <img :src="logo" alt="SIGAPP Logo" class="max-w-lg w-full px-8 md:px-0 pt-15 pb-5 md:pt-0 md:pb-0" draggable="false" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import { headerHeight } from "../globals";
import DottedLine from "../components/DottedLine.vue";
import logo from "../assets/logo.png";
import arrow from "../assets/right-arrow.png";

const paddingTop = ref(headerHeight.value);

watch(headerHeight, (newHeight) => {
  paddingTop.value = newHeight;
});

const handleClick = () => {
  window.open("https://discord.gg/jKTWKYarGE", "_blank");
};
</script>
