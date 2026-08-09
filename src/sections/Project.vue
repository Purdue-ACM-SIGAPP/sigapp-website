<template>
  <section
    id="project"
    class="min-h-[80vh] px-6 sm:px-8 py-20 relative overflow-hidden bg-white"
  >
    <!-- Section Title -->
    <div v-reveal class="section-title text-center mb-4">
      {{ sectionContent.title }}
    </div>

    <!-- Section Description -->
    <div v-reveal="100" class="section-subtitle max-w-3xl mb-12">
      {{ sectionContent.description }}
    </div>

    <!-- Decorative Divider -->
    <div class="flex justify-center mb-16">
      <SquiggleLine />
    </div>

    <!-- Zigzag Project Cards -->
    <div
      class="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8 max-w-screen-xl mx-auto"
    >
      <Card
        v-for="(project, i) in projects"
        :key="project.name"
        v-reveal="i * 100"
        :class="[
          'w-52 aspect-square rounded-3xl',
          i % 2 === 0 ? 'sm:translate-y-8' : 'sm:-translate-y-8',
        ]"
        :image="project.image"
        :description="project.description"
        :name="project.name"
      />
    </div>

    <div class="flex justify-center mt-16">
      <RouterLink to="/past-projects" class="btn-primary">
        View Past Projects
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import SquiggleLine from "../components/SquiggleLine.vue";
import Card from "../components/Card.vue";
import { projects, projectsSectionContent } from "../content/projects";

const sectionContent = projectsSectionContent;
</script>
