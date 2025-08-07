<template>
  <section
    id=""
    class="min-h-screen px-8 py-16 flex justify-center flex-col items-center"
  >
    <!-- Top Row -->
    <div
      class="w-full max-w-screen-xl flex flex-wrap justify-between items-start mb-12"
    >
      <div>
        <h2 class="text-3xl font-bold mb-2">
          Our Past, Present, and Future Projects
        </h2>
        <div class="pt-3 pb-10">
          <DottedLine />
        </div>
      </div>

      <div class="text-right max-w-md mt-4 md:mt-0">
        <p>
          “I had a great time <br />
          building up my engineering skills <br />
          while making connections in club” – Someone’s name
        </p>
      </div>
    </div>

    <!-- Bottom: Three boxes -->
    <div class="flex flex-wrap justify-center gap-6 w-full max-w-screen-xl">
      <div class="w-[90%] md:w-[30%] h-[500px] bg-dull rounded-3xl"></div>
      <div class="w-[90%] md:w-[30%] h-[500px] bg-black rounded-3xl"></div>
      <div class="w-[90%] md:w-[30%] h-[500px] bg-dull rounded-3xl"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DottedLine from "../components/DottedLine.vue";
</script>
