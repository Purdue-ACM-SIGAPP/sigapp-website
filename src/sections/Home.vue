<template>
  <section
    id="home"
    class="relative overflow-hidden min-h-[80vh] py-16 flex flex-col"
    :style="{ paddingTop: paddingTop + 'px' }"
  >
    <div
      class="blob-mask pointer-events-none absolute right-[-8%] top-[8%] w-[36rem] h-[36rem] max-w-[80vw] max-h-[80vw]"
      aria-hidden="true"
    >
      <ShaderGradientMesh />
    </div>

    <Banner />

    <div
      class="relative z-10 w-full max-w-screen-lg mx-auto px-6 pt-20 grid md:grid-cols-2 items-center gap-12"
    >
      <!-- Text content -->
      <div v-reveal class="order-2 md:order-1 space-y-6 text-center md:text-left">
        <div>
          <h1 class="text-4xl sm:text-5xl font-bold leading-tight">
            {{ heroContent.headlineLine1 }}
          </h1>
          <h1
            class="text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-dark-green to-dull-green bg-clip-text text-transparent"
          >
            {{ heroContent.headlineLine2 }}
          </h1>
        </div>

        <SquiggleLine variant="zigzag" />

        <p class="text-base sm:text-lg text-gray-700">
          {{ heroContent.tagline }}
        </p>

        <button
          type="button"
          class="group inline-flex items-center bg-dark text-white rounded-full font-semibold hover:bg-dark-green transition"
          @click="openDiscord"
          @mouseenter="isArrowHovered = true"
          @mouseleave="isArrowHovered = false"
        >
          <span class="pl-6 pr-3 py-3">{{ heroContent.ctaText }}</span>
          <span
            class="w-10 h-10 bg-white text-dark rounded-full flex items-center justify-center"
          >
            <img
              :src="isArrowHovered ? icons.arrowGreen : icons.arrow"
              alt="arrow"
              class="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              draggable="false"
            />
          </span>
          <span class="ml-1"></span>
        </button>
        <p class="text-sm text-gray-500">
          {{ heroContent.disclaimer }}
        </p>

        <div
          v-reveal="150"
          class="flex gap-4 justify-center md:justify-start pt-2"
        >
          <img
            :src="isDiscordHovered ? icons.discordGreen : icons.discord"
            alt="Discord"
            class="w-8 h-8 cursor-pointer transition-transform duration-150 hover:-rotate-12 hover:scale-110 active:scale-90"
            draggable="false"
            @click="openDiscord"
            @mouseenter="isDiscordHovered = true"
            @mouseleave="isDiscordHovered = false"
          />
          <img
            :src="isInstagramHovered ? icons.instagramGreen : icons.instagram"
            alt="Instagram"
            class="w-8 h-8 cursor-pointer transition-transform duration-150 hover:rotate-12 hover:scale-110 active:scale-90"
            draggable="false"
            @click="openInstagram"
            @mouseenter="isInstagramHovered = true"
            @mouseleave="isInstagramHovered = false"
          />
          <img
            :src="isGithubHovered ? icons.githubGreen : icons.github"
            alt="GitHub"
            class="w-8 h-8 cursor-pointer transition-transform duration-150 hover:-rotate-12 hover:scale-110 active:scale-90"
            draggable="false"
            @click="openGithub"
            @mouseenter="isGithubHovered = true"
            @mouseleave="isGithubHovered = false"
          />
          <img
            :src="isLinkedinHovered ? icons.linkedinGreen : icons.linkedin"
            alt="LinkedIn"
            class="w-8 h-8 cursor-pointer transition-transform duration-150 hover:rotate-12 hover:scale-110 active:scale-90"
            draggable="false"
            @click="openLinkedin"
            @mouseenter="isLinkedinHovered = true"
            @mouseleave="isLinkedinHovered = false"
          />
        </div>
      </div>

      <!-- Logo -->
      <div v-reveal="200" class="order-1 md:order-2 flex justify-center">
        <img
          :src="siteContent.logo"
          alt="SIGAPP Logo"
          class="max-w-xs w-full px-6 sm:px-0 animate-float"
          draggable="false"
          fetchpriority="high"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import { headerHeight } from "../globals";
import SquiggleLine from "../components/SquiggleLine.vue";
import Banner from "../components/Banner.vue";
import ShaderGradientMesh from "../components/ShaderGradientMesh.vue";
import { siteContent, icons } from "../content/site";
import { heroContent } from "../content/home";

const paddingTop = ref(headerHeight.value);

const isDiscordHovered = ref(false);
const isInstagramHovered = ref(false);
const isGithubHovered = ref(false);
const isLinkedinHovered = ref(false);
const isArrowHovered = ref(false);

watch(headerHeight, (newHeight) => {
  paddingTop.value = newHeight;
});

const openDiscord = () => {
  window.open(siteContent.discordUrl, "_blank");
};

const openInstagram = () => {
  window.open(siteContent.instagramUrl, "_blank");
};

const openGithub = () => {
  window.open(siteContent.githubUrl, "_blank");
};

const openLinkedin = () => {
  window.open(siteContent.linkedinUrl, "_blank");
};
</script>

<style scoped>
/* The shadergradient canvas always fills its container with an opaque
   scene, so we fade it to transparent at the edges here instead of relying
   on shader-side alpha, keeping the "floating blob" look on a white page.
   The fade holds full opacity out to 55% so the gradient reads as vivid,
   saturated color (like shadergradient.co's own reference shots) rather
   than a pale haze — only the outer rim softens into the page. */
.blob-mask {
  mask-image: radial-gradient(
    ellipse 60% 60% at 50% 50%,
    black 0%,
    black 55%,
    transparent 85%
  );
  -webkit-mask-image: radial-gradient(
    ellipse 60% 60% at 50% 50%,
    black 0%,
    black 55%,
    transparent 85%
  );
}
</style>
