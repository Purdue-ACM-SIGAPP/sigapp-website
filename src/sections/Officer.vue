<template>
  <section
    id="officer"
    class="min-h-screen bg-white px-6 py-16 flex flex-col items-center"
  >
    <!-- Header (Mobile) -->
    <div class="text-center mb-12 block lg:hidden">
      <h2 class="text-3xl md:text-4xl font-bold leading-tight">
        Say hello to our current <br />
        officers for 2025–2026!
      </h2>
      <DottedLine class="mt-6" />
    </div>

    <!-- Responsive Layout -->
    <div
      class="flex flex-col lg:flex-row justify-center items-center lg:items-start w-full max-w-7xl gap-12 lg:gap-16"
    >
      <!-- Left Column -->
      <div class="flex flex-col gap-8 items-center">
        <Card
          name="Officer Name"
          description="Officer description"
          :image="safewalk"
          class="w-[260px] aspect-square rounded-2xl"
        />
        <div class="flex gap-4">
          <Card
            name="Officer Name"
            description="Officer description"
            :image="safewalk"
            class="w-[140px] aspect-square rounded-2xl"
          />
          <Card
            name="Officer Name"
            description="Officer description"
            :image="safewalk"
            class="w-[140px] aspect-square rounded-2xl"
          />
        </div>
      </div>

      <!-- Center Column -->
      <div class="flex flex-col items-center gap-8">
        <!-- Header (Desktop) -->
        <div class="hidden lg:block text-center mb-4 pb-6">
          <h2 class="text-3xl md:text-4xl font-bold leading-tight">
            Say hello to our current <br />
            officers for 2025–2026!
          </h2>
          <DottedLine class="mt-6" />
        </div>
        <Card
          name="Officer Name"
          description="Officer description"
          :image="safewalk"
          class="w-[260px] aspect-square rounded-2xl"
        />
      </div>

      <!-- Right Column -->
      <div class="flex flex-col gap-6 items-center">
        <Card
          name="Officer Name"
          description="Officer description"
          :image="safewalk"
          class="w-[140px] aspect-square rounded-2xl"
        />
        <Card
          name="Officer Name"
          description="Officer description"
          :image="safewalk"
          class="w-[140px] aspect-square rounded-2xl"
        />
        <Card
          name="Officer Name"
          description="Officer description"
          :image="safewalk"
          class="w-[140px] aspect-square rounded-2xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DottedLine from "../components/DottedLine.vue";
import Card from "../components/Card.vue";
import safewalk from "../assets/safewalk.jpg";
</script>
