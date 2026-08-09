<template>
  <section class="page-section">
    <div class="page-container">
      <RouterLink to="/" class="link-green text-base inline-block mb-8"
        >← Back to home</RouterLink
      >
      <PageHero
        :title="pastProjectsPageContent.title"
        :subtitle="pastProjectsPageContent.subtitle"
      />

      <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="(project, i) in projects"
          :key="project.name"
          v-reveal="i * 100"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHero from "../components/PageHero.vue";
import ProjectCard from "../components/ProjectCard.vue";
import { projects, pastProjectsPageContent } from "../content/projects";
</script>
