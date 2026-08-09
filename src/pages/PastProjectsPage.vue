<template>
  <section class="page-section">
    <div class="page-container">
      <RouterLink to="/" class="link-green text-sm inline-block mb-8"
        >← Back to home</RouterLink
      >
      <PageHero
        title="Past Projects"
        subtitle="Every project reflects what SIGAPP is all about — solving real problems with practical, user-centered solutions."
      />

      <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHero from "../components/PageHero.vue";
import ProjectCard from "../components/ProjectCard.vue";
import { projects } from "../data/projectsData";
</script>
