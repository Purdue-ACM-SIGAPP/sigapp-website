<template>
  <section class="w-full max-w-screen-xl mx-auto">
    <div class="text-center mb-4">
      <h2 class="section-title mb-3">From the Gram</h2>
      <DottedLine class="mx-auto" />
      <p class="section-subtitle">
        A few recent moments from
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
        v-for="url in reversedPostUrls"
        :key="url"
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
        <GradientMesh :speed="0.08" />
      </div>
      <a
        :href="instagramProfileUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="relative z-10 h-full flex flex-col items-center justify-center gap-3 text-white text-center px-6"
      >
        <span class="text-2xl font-bold drop-shadow">Follow @purduesigapp</span>
        <span class="text-sm opacity-90"
          >See our latest posts on Instagram →</span
        >
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, watch } from "vue";
import DottedLine from "./DottedLine.vue";
import GradientMesh from "./GradientMesh.vue";
import { instagramPostUrls, instagramProfileUrl } from "../data/instagramData";

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

onMounted(processEmbeds);
watch(instagramPostUrls, processEmbeds);
</script>
