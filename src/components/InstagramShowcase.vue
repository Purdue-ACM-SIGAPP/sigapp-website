<template>
  <section
    id="past-moments"
    ref="sectionRef"
    class="min-h-[60vh] px-6 sm:px-8 py-20 bg-white"
  >
    <div class="max-w-screen-xl mx-auto">
      <div v-reveal class="text-center mb-4">
        <h2 class="section-title mb-3">{{ sectionContent.title }}</h2>
        <SquiggleLine class="mx-auto" />
        <p class="section-subtitle">
          {{ sectionContent.introText }}
          <a
            :href="instagramProfileUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="link-green"
            >@purduesigapp</a
          >.
        </p>
      </div>

      <div
        v-if="reversedPostUrls.length"
        class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
      >
        <div
          v-for="(url, i) in reversedPostUrls"
          :key="url"
          v-reveal="i * 80"
          class="w-full max-w-[340px] mx-auto"
        >
          <blockquote
            class="instagram-media w-full rounded-2xl overflow-hidden shadow-md"
            :data-instgrm-permalink="url"
            data-instgrm-version="14"
            style="background: #fff; margin: 0"
          />
        </div>
      </div>

      <div v-else class="mt-12 relative rounded-3xl overflow-hidden h-64">
        <div class="absolute inset-0">
          <ShaderGradientMesh
            :colors="['#831843', '#166534', '#9d174d']"
            :speed="0.15"
          />
        </div>
        <a
          :href="instagramProfileUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="relative z-10 h-full flex flex-col items-center justify-center gap-3 text-white text-center px-6"
        >
          <span class="text-2xl font-bold drop-shadow">{{
            sectionContent.followHeadline
          }}</span>
          <span class="text-sm opacity-90">{{
            sectionContent.followSubtext
          }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from "vue";
import SquiggleLine from "./SquiggleLine.vue";
import ShaderGradientMesh from "./ShaderGradientMesh.vue";
import {
  instagramPostUrls,
  instagramProfileUrl,
  instagramSectionContent,
} from "../content/instagram";

const sectionContent = instagramSectionContent;

// Newest post first, matching Instagram's own grid convention.
const reversedPostUrls = computed(() => [...instagramPostUrls].reverse());

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

let scriptLoadPromise: Promise<void> | null = null;

function loadInstagramEmbedScript(): Promise<void> {
  if (window.instgrm) return Promise.resolve();
  if (scriptLoadPromise) return scriptLoadPromise;

  scriptLoadPromise = new Promise((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]',
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });

  return scriptLoadPromise;
}

async function processEmbeds() {
  if (!instagramPostUrls.length) return;
  await loadInstagramEmbedScript();
  await nextTick();
  window.instgrm?.Embeds.process();
}

// This is the last section on the page — load Instagram's (heavy) embed
// script and iframes only once it's actually about to scroll into view,
// not unconditionally on every page load.
const sectionRef = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (!instagramPostUrls.length || !sectionRef.value) return;
  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        processEmbeds();
        observer?.disconnect();
      }
    },
    { rootMargin: "600px" },
  );
  observer.observe(sectionRef.value);
});

onUnmounted(() => observer?.disconnect());
</script>
