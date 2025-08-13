<template>
  <footer class="bg-dull-green text-white py-6">
    <div class="container mx-auto px-4 flex flex-col items-center text-center">
      <p>Let’s build something awesome — together.</p>

      <div class="flex gap-4 pt-4">
        <img
          v-for="(icon, index) in socialIcons"
          :key="index"
          :src="icon.src"
          :alt="icon.name"
          :aria-label="icon.name"
          class="w-8 h-8 cursor-pointer transition-transform duration-200 ease-in-out active:scale-90 hover:scale-125"
          @click="icon.action"
          draggable="false"
        />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import discord from "../assets/discord.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";

const socialIcons = reactive([
  {
    name: "Discord",
    src: discord,
    isHovered: false,
    action: () => window.open("https://discord.gg/jKTWKYarGE", "_blank"),
  },
  {
    name: "Instagram",
    src: instagram,
    isHovered: false,
    action: () =>
      window.open("https://www.instagram.com/purduesigapp", "_blank"),
  },
  {
    name: "GitHub",
    src: github,
    isHovered: false,
    action: () => window.open("https://github.com/Purdue-ACM-SIGAPP", "_blank"),
  },
]);
</script>
