<template>
  <section
    id="what-we-do"
    class="min-h-screen px-6 md:px-12 bg-white flex flex-col items-center"
  >
    <!-- Top Row -->
    <div
      class="w-full max-w-screen-xl flex flex-col md:flex-row justify-between items-start mb-16"
    >
      <!-- Title + Dotted Line -->
      <div>
        <h2 class="text-4xl font-bold text-dark mb-3">What We Do</h2>
        <div class="pt-2 pb-6">
          <DottedLine />
        </div>
      </div>

      <!-- Quote -->
      <div
        class="text-gray-700 text-right max-w-md mt-8 md:mt-0 md:text-left md:ml-auto"
      >
        <p class="italic">
          “Whether you're an aspiring developer or an experienced coder, SIGAPP
          is your launchpad for building software with purpose, while gaining
          real-world experience in a collaborative environment.”
        </p>
        <p class="mt-2 font-medium">– Someone’s Name</p>
      </div>
    </div>

    <!-- Bottom: Three Info Boxes -->
    <div class="max-w-screen-xl flex flex-wrap justify-center gap-8">
      <!-- Wrapper to make cards same height -->
      <div class="w-full md:w-[30%] flex">
        <div class="bg-gray-100 rounded-3xl p-6 shadow-sm flex flex-col w-full">
          <h3 class="text-2xl font-semibold mb-4 text-dark-green">
            Real-World Apps
          </h3>
          <p class="text-dark">
            Our projects go beyond class assignments — they solve real problems
            that our members care about. You’ll be building something that you
            (and others) will actually want to use.
          </p>
        </div>
      </div>

      <div class="w-full md:w-[30%] flex">
        <div
          class="bg-dark text-white rounded-3xl p-6 shadow-sm flex flex-col w-full"
        >
          <h3 class="text-2xl font-semibold mb-4 text-light-green">
            Real-World Experience
          </h3>
          <p>
            We model our workflows on those used by top tech companies — think
            Git, sprints, code reviews — but in a fun, low-pressure setting.
            You’ll learn what it’s like to work on a real dev team.
          </p>
        </div>
      </div>

      <div class="w-full md:w-[30%] flex">
        <div class="bg-gray-100 rounded-3xl p-6 shadow-sm flex flex-col w-full">
          <h3 class="text-2xl font-semibold mb-4 text-dark-green">
            Real-World Education
          </h3>
          <p class="text-dark">
            No experience? No problem! We welcome members from all backgrounds
            and skill levels. Our experienced team will help you ramp up
            quickly, whether you’re learning your first programming language or
            shipping your first full-stack app.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DottedLine from "../components/DottedLine.vue";
</script>
