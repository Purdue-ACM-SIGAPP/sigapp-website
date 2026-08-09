<template>
  <section
    id="project"
    class="min-h-[80vh] px-6 sm:px-8 py-20 relative overflow-hidden bg-white"
  >
    <!-- Section Title -->
    <div class="text-3xl font-bold text-center text-gray-900 mb-4">
      Our Past Projects
    </div>

    <!-- Section Description -->
    <div class="max-w-3xl mx-auto text-center text-gray-700 text-lg mb-12">
      These projects reflect what SIGAPP is all about —
      <span class="font-medium text-dark">
        solving real problems with practical, user-centered solutions </span
      >. Every semester brings new challenges and fresh ideas, and we're always
      excited to see what our members will build next.
    </div>

    <!-- Decorative Divider -->
    <div class="flex justify-center mb-16">
      <DottedLine />
    </div>

    <!-- Zigzag Project Cards -->
    <div
      class="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8 max-w-screen-xl mx-auto"
    >
      <Card
        v-for="(project, i) in projects"
        :key="project.name"
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

    <InstagramShowcase class="mt-24" />
  </section>
</template>

<script setup lang="ts">
import DottedLine from "../components/DottedLine.vue";
import Card from "../components/Card.vue";
import InstagramShowcase from "../components/InstagramShowcase.vue";
import { projects } from "../data/projectsData";
</script>
