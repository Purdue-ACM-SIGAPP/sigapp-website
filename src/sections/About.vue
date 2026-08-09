<template>
  <section
    id="about"
    class="min-h-[80vh] w-full bg-white px-6 md:px-10 py-20 flex flex-col items-center text-dark"
  >
    <div v-reveal class="pt-10 text-center mb-12">
      <h2 class="section-title mb-4">{{ about.title }}</h2>
      <SquiggleLine class="mx-auto" />
    </div>

    <div
      class="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center gap-12"
    >
      <div v-reveal class="w-full lg:w-1/2 text-lg leading-relaxed space-y-6">
        <p v-for="(para, i) in about.paragraphs" :key="i" v-html="para" />
      </div>

      <div v-reveal="150" class="w-full lg:w-1/2">
        <Carousel />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SquiggleLine from "../components/SquiggleLine.vue";
import Carousel from "../components/Carousel.vue";
import { aboutData } from "../data/homeData";

const about = aboutData;
</script>
