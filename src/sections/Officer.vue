<template>
  <section
    id="officer"
    class="min-h-[80vh] py-16 bg-white px-6 py-16 flex flex-col items-center"
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
          name="Soleil Pham"
          description="President"
          :image="soleil"
          class="w-[260px] aspect-square rounded-2xl"
          show-linkedin="https://www.linkedin.com/in/chan-nhu-p-4876a127a/"
        />
        <div class="flex gap-4">
          <Card
            name="Colin Wu"
            description="Front End Lead"
            :image="colin"
            class="w-[140px] aspect-square rounded-2xl"
            show-linkedin="https://www.linkedin.com/in/colinwu0403/"
          />
          <Card
            name="Justin Puthenpurayil"
            description="Front End Lead"
            :image="justin"
            class="w-[140px] aspect-square rounded-2xl"
            show-linkedin="https://www.linkedin.com/in/justinputhenpurayil/"
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
          name="David Panek"
          description="Vice President"
          :image="david"
          class="w-[260px] aspect-square rounded-2xl"
          show-linkedin="https://www.linkedin.com/in/david-panek-1046b0263/"
        />
      </div>

      <!-- Right Column -->
      <div class="flex flex-col gap-6 items-center">
        <Card
          name="Andrew Liu"
          description="Back End Lead"
          :image="andrew"
          class="w-[140px] aspect-square rounded-2xl"
          show-linkedin="https://www.linkedin.com/in/andrew-liu-715029250/"
        />
        <Card
          name="Jonnen Chong"
          description="Back End Lead"
          :image="jonnen"
          class="w-[140px] aspect-square rounded-2xl"
          show-linkedin="https://www.linkedin.com/in/jonnen-chong/"
        />
        <Card
          name="Jack Reynolds"
          description="Server Manager"
          :image="jack"
          class="w-[140px] aspect-square rounded-2xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DottedLine from "../components/DottedLine.vue";
import Card from "../components/Card.vue";
import soleil from "../assets/soleil.jpeg";
import andrew from "../assets/andrew.jpeg";
import colin from "../assets/colin.jpeg";
import jonnen from "../assets/jonnen.jpeg";
import david from "../assets/david.jpeg";
import justin from "../assets/justin.jpeg";
import jack from "../assets/jack.jpg";
</script>
