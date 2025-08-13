<template>
  <section
    id="what-we-do"
    class="min-h-[80vh] py-16 bg-white px-6 md:px-12 py-20 flex flex-col items-center"
  >
    <!-- Top Row -->
    <div
      class="w-full max-w-screen-xl flex flex-col md:flex-row justify-between gap-8 mb-16"
    >
      <!-- Title + Dotted Line -->
      <div>
        <h2 class="text-4xl font-bold text-dark mb-3">What We Do</h2>
        <div class="pt-2 pb-6">
          <DottedLine />
        </div>
      </div>

      <!-- Quote -->
      <div class="max-w-md text-gray-700 md:ml-auto md:text-left text-right">
        <p class="italic">
          “Whether you're an aspiring developer or an experienced coder, SIGAPP
          is your launchpad for building software with purpose, while gaining
          real-world experience in a collaborative environment.”
        </p>
        <p class="mt-2 font-medium">– Tommy Lane, Former SIGAPP President (2022–2024)</p>
      </div>
    </div>

    <!-- Info Boxes -->
    <div class="w-full max-w-screen-xl flex flex-wrap gap-8 justify-center">
      <InfoCard
        title="Real-World Apps"
        bg="bg-gray-100"
        text="text-dark"
        highlight="text-dark-green"
      >
        Our projects go beyond class assignments — they solve real problems that
        our members care about. You’ll be building something that you (and
        others) will actually want to use.
      </InfoCard>

      <InfoCard
        title="Real-World Experience"
        bg="bg-dark"
        text="text-white"
        highlight="text-light-green"
      >
        We model our workflows on those used by top tech companies — think Git,
        sprints, code reviews — but in a fun, low-pressure setting. You’ll learn
        what it’s like to work on a real dev team.
      </InfoCard>

      <InfoCard
        title="Real-World Education"
        bg="bg-gray-100"
        text="text-dark"
        highlight="text-dark-green"
      >
        No experience? No problem! We welcome members from all backgrounds and
        skill levels. Our experienced team will help you ramp up quickly,
        whether you’re learning your first programming language or shipping your
        first full-stack app.
      </InfoCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import DottedLine from "../components/DottedLine.vue";
import { defineComponent, h } from "vue";

const InfoCard = defineComponent({
  props: {
    title: String,
    bg: String,
    text: String,
    highlight: String,
  },
  setup(props, { slots }) {
    return () =>
      h("div", { class: "w-full md:w-[30%] flex" }, [
        h(
          "div",
          {
            class: `rounded-3xl p-6 shadow-sm flex flex-col w-full ${props.bg} ${props.text}`,
          },
          [
            h(
              "h3",
              {
                class: `text-2xl font-semibold mb-4 ${props.highlight}`,
              },
              props.title,
            ),
            h("p", null, slots.default?.()),
          ],
        ),
      ]);
  },
});
</script>
