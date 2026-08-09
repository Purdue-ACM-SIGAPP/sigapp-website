<template>
  <section class="page-section">
    <div class="page-container">
      <RouterLink to="/" class="link-green text-sm inline-block mb-8"
        >← Back to home</RouterLink
      >
      <PageHero
        :title="pastOfficersPageContent.title"
        :subtitle="pastOfficersPageContent.subtitle"
      />

      <div class="space-y-16 mt-16">
        <div
          v-for="(year, yi) in pastOfficerYears"
          :key="year.label"
          v-reveal="Math.min(yi * 120, 300)"
          class="year-divider"
        >
          <h2 class="year-label mb-8">{{ year.label }}</h2>

          <div
            v-if="year.photo"
            class="flex flex-col md:flex-row md:items-start gap-8"
          >
            <div class="md:w-2/5 shrink-0">
              <TeamPhoto
                :photo="year.photo"
                :alt="'SIGAPP ' + year.label + ' team'"
                :regions="year.regions"
                @hover="hoveredName = $event"
                @select="hoveredName = $event"
              />
            </div>

            <div
              class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 content-start"
            >
              <OfficerChip
                v-for="officer in year.officers"
                :key="officer.name + officer.role"
                :officer="officer"
                :highlighted="hoveredName === officer.name"
                @select="selectedOfficer = $event"
              />
            </div>
          </div>

          <div
            v-else
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            <OfficerChip
              v-for="officer in year.officers"
              :key="officer.name + officer.role"
              :officer="officer"
              @select="selectedOfficer = $event"
            />
          </div>
        </div>
      </div>
    </div>

    <OfficerDetailModal
      :officer="selectedOfficer"
      @close="selectedOfficer = null"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PageHero from "../components/PageHero.vue";
import TeamPhoto from "../components/TeamPhoto.vue";
import OfficerChip from "../components/OfficerChip.vue";
import OfficerDetailModal from "../components/OfficerDetailModal.vue";
import {
  pastOfficerYears,
  pastOfficersPageContent,
  type Officer,
} from "../content/officers";

const selectedOfficer = ref<Officer | null>(null);
const hoveredName = ref<string | null>(null);
</script>
