<template>
  <section
    id="home"
    class="min-h-screen flex flex-col"
    :style="{ paddingTop: paddingTop + 'px' }"
  >
    <Banner />

    <div
      class="w-full max-w-screen-lg mx-auto px-6 pt-20 grid md:grid-cols-2 items-center gap-12"
    >
      <!-- Text content -->
      <div class="space-y-6 text-center md:text-left">
        <div>
          <h1 class="text-4xl sm:text-5xl font-bold leading-tight">Purdue</h1>
          <h1 class="text-4xl sm:text-5xl font-bold leading-tight">
            ACM SIGAPP
          </h1>
        </div>

        <DottedLine />

        <p class="text-base sm:text-lg text-gray-700">
          Purdue's premier app development club!
        </p>

        <button
          @click="openDiscord"
          type="button"
          class="group inline-flex items-center bg-black text-white rounded-full font-semibold hover:bg-dark-green transition"
        >
          <span class="pl-6 pr-3 py-3">Join our discord server</span>
          <span
            class="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center"
          >
            <img
              :src="arrow"
              alt="arrow"
              class="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              draggable="false"
            />
          </span>
          <span class="ml-1"></span>
        </button>

        <div class="flex gap-4 justify-center md:justify-start pt-2">
          <img
            :src="discord"
            alt="Discord"
            class="w-8 h-8 cursor-pointer transition-transform duration-150 active:scale-90"
            @click="openDiscord"
            draggable="false"
          />
          <img
            :src="instagram"
            alt="Instagram"
            class="w-8 h-8 cursor-pointer transition-transform duration-150 active:scale-90"
            @click="openInstagram"
            draggable="false"
          />
        </div>
      </div>

      <!-- Logo -->
      <div class="flex justify-center">
        <img
          :src="logo"
          alt="SIGAPP Logo"
          class="max-w-xs w-full px-6 sm:px-0"
          draggable="false"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import { headerHeight } from "../globals";
import DottedLine from "../components/DottedLine.vue";
import Banner from "../components/Banner.vue";
import logo from "../assets/logo.png";
import arrow from "../assets/right-arrow.png";
import discord from "../assets/discord.png";
import instagram from "../assets/instagram.png";

const paddingTop = ref(headerHeight.value);

watch(headerHeight, (newHeight) => {
  paddingTop.value = newHeight;
});

const openDiscord = () => {
  window.open("https://discord.gg/jKTWKYarGE", "_blank");
};

const openInstagram = () => {
  window.open("https://www.instagram.com/purduesigapp", "_blank");
};
</script>
