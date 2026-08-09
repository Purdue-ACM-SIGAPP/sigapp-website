<template>
  <section
    id="officer"
    class="min-h-[80vh] bg-white px-6 py-16 flex flex-col items-center"
  >
    <!-- Header (Mobile) -->
    <div class="text-center mb-12 block lg:hidden">
      <h2 class="text-3xl md:text-4xl font-bold leading-tight">
        {{ sectionTitle }}
      </h2>
      <DottedLine class="mt-6" />
    </div>

    <!-- Responsive Layout -->
    <div
      class="flex flex-col lg:flex-row justify-center items-center lg:items-start w-full max-w-7xl gap-12 lg:gap-16"
    >
      <!-- Left Column: President + FE Leads -->
      <div class="flex flex-col gap-8 items-center">
        <Card
          :name="officers[0].name"
          :description="officers[0].role"
          :image="officers[0].image!"
          class="w-[260px] aspect-square rounded-2xl"
          :show-linkedin="officers[0].linkedin"
        />
        <div class="flex gap-4">
          <Card
            :name="officers[2].name"
            :description="officers[2].role"
            :image="officers[2].image!"
            class="w-[140px] aspect-square rounded-2xl"
            :show-linkedin="officers[2].linkedin"
          />
          <Card
            :name="officers[3].name"
            :description="officers[3].role"
            :image="officers[3].image!"
            class="w-[140px] aspect-square rounded-2xl"
            :show-linkedin="officers[3].linkedin"
          />
        </div>
      </div>

      <!-- Center Column: VP + heading -->
      <div class="flex flex-col items-center gap-8">
        <div class="hidden lg:block text-center mb-4 pb-6">
          <h2 class="text-3xl md:text-4xl font-bold leading-tight">
            {{ sectionTitle }}
          </h2>
          <DottedLine class="mt-6" />
        </div>
        <Card
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
            :name="officers[4].name"
            :description="officers[4].role"
            :image="officers[4].image!"
            class="w-[140px] aspect-square rounded-2xl"
            :show-linkedin="officers[4].linkedin"
          />
          <Card
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
            :name="officers[6].name"
            :description="officers[6].role"
            :image="officers[6].image!"
            class="w-[140px] aspect-square rounded-2xl"
            :show-linkedin="officers[6].linkedin"
          />
          <Card
            :name="officers[7].name"
            :description="officers[7].role"
            :image="officers[7].image!"
            class="w-[140px] aspect-square rounded-2xl"
            :show-linkedin="officers[7].linkedin"
          />
        </div>
      </div>
    </div>

    <RouterLink to="/past-officers" class="btn-primary mt-16 inline-block">
      Meet Our Past Officers
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
import DottedLine from "../components/DottedLine.vue";
import Card from "../components/Card.vue";
import { currentOfficers } from "../data/officersData";
import { currentOfficersSection } from "../data/homeData";

const officers = currentOfficers;
const sectionTitle = currentOfficersSection.title;
</script>
