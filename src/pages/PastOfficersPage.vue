<template>
  <section class="page-section">
    <div class="page-container">
      <RouterLink to="/" class="link-green text-sm inline-block mb-8"
        >← Back to home</RouterLink
      >
      <PageHero
        title="Past Officers"
        subtitle="A look back at the people who built SIGAPP into what it is today."
      />

      <div class="space-y-16 mt-16">
        <div
          v-for="(year, yi) in pastOfficerYears"
          :key="year.label"
          v-reveal="yi * 120"
          class="year-divider"
        >
          <h2 class="year-label mb-8">{{ year.label }}</h2>

          <div
            v-if="year.photo"
            class="mb-10 rounded-2xl overflow-hidden shadow-lg max-w-2xl"
          >
            <img
              :src="year.photo"
              :alt="'SIGAPP ' + year.label + ' team'"
              class="w-full object-cover"
            />
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div
              v-for="officer in year.officers"
              :key="officer.name + officer.role"
              class="officer-chip"
            >
              <p class="font-semibold text-dark">{{ officer.name }}</p>
              <p class="text-sm text-gray-500 mt-1">{{ officer.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PageHero from "../components/PageHero.vue";
import { pastOfficerYears } from "../data/officersData";
</script>
