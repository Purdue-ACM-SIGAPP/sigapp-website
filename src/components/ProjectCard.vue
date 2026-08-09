<template>
  <div class="card-base flex flex-col bg-white wobble-hover">
    <div class="aspect-video overflow-hidden bg-gray-100">
      <img
        :src="project.image"
        :alt="project.name"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="p-6 flex flex-col flex-1">
      <div class="flex items-start justify-between gap-2 mb-2">
        <h3 class="text-xl font-bold text-dark">{{ project.name }}</h3>
        <span class="year-badge shrink-0">{{ project.year }}</span>
      </div>
      <p class="text-gray-600 text-sm leading-relaxed flex-1">
        {{ project.description }}
      </p>
      <a
        v-if="project.link"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 link-green text-sm inline-block"
      >
        View on GitHub →
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "../data/projectsData";

defineProps<{ project: Project }>();
</script>
