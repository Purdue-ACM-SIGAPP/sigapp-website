<template>
  <footer class="bg-dull-green text-white py-6">
    <div class="container mx-auto px-4 flex flex-col items-center text-center">
      <p>{{ siteContent.footerMessage }}</p>

      <div class="flex gap-4 pt-4">
        <img
          v-for="(icon, index) in socialIcons"
          :key="index"
          :src="icon.src"
          :alt="icon.name"
          :aria-label="icon.name"
          class="w-8 h-8 cursor-pointer transition-transform duration-200 ease-in-out active:scale-90 hover:scale-125"
          draggable="false"
          @click="icon.action"
        />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { siteContent, icons } from "../content/site";

const socialIcons = reactive([
  {
    name: "Discord",
    src: icons.discord,
    isHovered: false,
    action: () => window.open(siteContent.discordUrl, "_blank"),
  },
  {
    name: "Instagram",
    src: icons.instagram,
    isHovered: false,
    action: () => window.open(siteContent.instagramUrl, "_blank"),
  },
  {
    name: "GitHub",
    src: icons.github,
    isHovered: false,
    action: () => window.open(siteContent.githubUrl, "_blank"),
  },
  {
    name: "LinkedIn",
    src: icons.linkedin,
    isHovered: false,
    action: () => window.open(siteContent.linkedinUrl, "_blank"),
  },
]);
</script>
