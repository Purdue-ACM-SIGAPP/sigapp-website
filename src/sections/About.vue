<template>
  <section
    id="about"
    class="min-h-[80vh] py-16 w-full bg-white px-6 md:px-10 py-20 flex flex-col items-center text-dark"
  >
    <!-- Section Title -->
    <div class="pt-10 text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-extrabold mb-4">Who We Are</h2>
      <DottedLine class="mx-auto" />
    </div>

    <!-- Content -->
    <div
      class="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center gap-12"
    >
      <!-- Text Content -->
      <div class="w-full lg:w-1/2 text-lg leading-relaxed space-y-6">
        <p>
          We are <strong>SIGAPP</strong> — Purdue's Special Interest Group for
          Applied Computing under the
          <a
            href="https://acm.cs.purdue.edu/"
            target="_blank"
            rel="noopener noreferrer"
            class="underline font-semibold text-dark-green"
          >
            Association for Computing Machinery (ACM) </a
          >.
        </p>
        <p>
          At SIGAPP, we focus on designing and building real-world applications
          that solve practical problems — both on campus and in the broader
          community.
        </p>
      </div>

      <!-- Image Carousel -->
      <div class="w-full lg:w-1/2">
        <Carousel />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DottedLine from "../components/DottedLine.vue";
import Carousel from "../components/Carousel.vue";
</script>
