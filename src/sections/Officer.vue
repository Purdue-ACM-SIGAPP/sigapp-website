<template>
  <section
    id="officer"
    class="relative overflow-x-hidden min-h-[80vh] bg-white px-6 py-16 flex flex-col items-center"
  >
    <!-- Header -->
    <div class="relative z-10 text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold leading-tight">
        {{ sectionTitle }}
      </h2>
      <SquiggleLine class="mt-6" />
    </div>

    <!-- Responsive Layout -->
    <div
      class="relative z-10 flex flex-col lg:flex-row justify-center items-center lg:items-start w-full max-w-7xl gap-12 lg:gap-16"
    >
      <!-- Left Column: President + FE Leads -->
      <div class="flex flex-col gap-8 items-center">
        <Card
          v-if="officers[0]"
          v-reveal="0"
          :name="officers[0].name"
          :description="officers[0].role"
          :image="officers[0].image!"
          class="w-[260px] aspect-square rounded-2xl"
          :show-linkedin="officers[0].linkedin"
        />
        <div class="flex gap-4">
          <Card
            v-if="officers[2]"
            v-reveal="100"
            :name="officers[2].name"
            :description="officers[2].role"
            :image="officers[2].image!"
            class="w-[140px] aspect-square rounded-2xl"
            :show-linkedin="officers[2].linkedin"
          />
          <Card
            v-if="officers[3]"
            v-reveal="150"
            :name="officers[3].name"
            :description="officers[3].role"
            :image="officers[3].image!"
            class="w-[140px] aspect-square rounded-2xl"
            :show-linkedin="officers[3].linkedin"
          />
        </div>
      </div>

      <!-- Center Column: VP -->
      <div class="flex flex-col items-center">
        <Card
          v-if="officers[1]"
          v-reveal="50"
          :name="officers[1].name"
          :description="officers[1].role"
          :image="officers[1].image!"
          class="w-[260px] aspect-square rounded-2xl"
          :show-linkedin="officers[1].linkedin"
        />
      </div>

      <!-- Right Column: BE Leads + Server Manager + Marketing -->
      <div class="flex gap-8">
        <div class="flex flex-col gap-8">
          <Card
            v-if="officers[4]"
            v-reveal="200"
            :name="officers[4].name"
            :description="officers[4].role"
            :image="officers[4].image!"
            class="w-[140px] aspect-square rounded-2xl"
            :show-linkedin="officers[4].linkedin"
          />
          <Card
            v-if="officers[5]"
            v-reveal="250"
            :name="officers[5].name"
            :description="officers[5].role"
            :image="officers[5].image!"
            class="w-[140px] aspect-square rounded-2xl"
            :show-linkedin="officers[5].linkedin"
          />
        </div>
        <div class="flex flex-col gap-8">
          <div class="h-[100px] hidden md:inline" />
          <Card
            v-if="officers[6]"
            v-reveal="300"
            :name="officers[6].name"
            :description="officers[6].role"
            :image="officers[6].image!"
            class="w-[140px] aspect-square rounded-2xl"
            :show-linkedin="officers[6].linkedin"
          />
          <Card
            v-if="officers[7]"
            v-reveal="350"
            :name="officers[7].name"
            :description="officers[7].role"
            :image="officers[7].image!"
            class="w-[140px] aspect-square rounded-2xl"
            :show-linkedin="officers[7].linkedin"
          />
        </div>
      </div>
    </div>

    <RouterLink
      to="/past-officers"
      class="relative z-10 btn-primary mt-16 inline-block"
    >
      Meet Our Past Officers
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
import SquiggleLine from "../components/SquiggleLine.vue";
import Card from "../components/Card.vue";
import { currentOfficers, officersSectionTitle } from "../content/officers";

const officers = currentOfficers;
const sectionTitle = officersSectionTitle;
</script>
