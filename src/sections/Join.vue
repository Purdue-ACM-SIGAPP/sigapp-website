<template>
  <section
    id="what-we-do"
    class="min-h-[80vh] bg-white px-6 md:px-12 py-20 flex flex-col items-center"
  >
    <!-- Top Row -->
    <div
      v-reveal
      class="w-full max-w-screen-xl flex flex-col md:flex-row justify-between gap-8 mb-16"
    >
      <div>
        <h2 class="section-title mb-3">{{ data.title }}</h2>
        <div class="pt-2 pb-6">
          <SquiggleLine />
        </div>
      </div>

      <div class="max-w-md text-gray-700 md:ml-auto md:text-left text-right">
        <p class="italic">"{{ data.quote }}"</p>
        <p class="mt-2 font-medium">– {{ data.quoteAuthor }}</p>
      </div>
    </div>

    <!-- Info Cards -->
    <div class="w-full max-w-screen-xl flex flex-wrap gap-8 justify-center">
      <div
        v-for="(card, i) in data.cards"
        :key="card.title"
        v-reveal="i * 120"
        class="w-full md:w-[30%] flex"
      >
        <div
          :class="[
            'rounded-3xl p-6 shadow-sm flex flex-col w-full wobble-hover',
            card.bg,
            card.text,
          ]"
        >
          <h3 :class="['text-2xl font-semibold mb-4', card.highlight]">
            {{ card.title }}
          </h3>
          <p>{{ card.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SquiggleLine from "../components/SquiggleLine.vue";
import { whatWeDoContent } from "../content/home";

const data = whatWeDoContent;
</script>
