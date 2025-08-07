<template>
  <section
    id="project"
    class="min-h-screen px-6 sm:px-8 py-20 relative overflow-hidden bg-white"
  >
    <!-- Section Title -->
    <div class="text-3xl font-bold text-center text-gray-900 mb-4">
      Our Past Projects
    </div>

    <!-- Section Description -->
    <div class="max-w-3xl mx-auto text-center text-gray-700 text-lg mb-12">
      These projects reflect what SIGAPP is all about —
      <span class="font-medium text-black"
        >solving real problems with practical, user-centered solutions</span
      >. Every semester brings new challenges and fresh ideas, and we’re always
      excited to see what our members will build next.
    </div>

    <!-- Decorative Divider -->
    <div class="flex justify-center mb-16">
      <DottedLine />
    </div>

    <!-- Zigzag Project Cards -->
    <div
      class="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8 max-w-screen-xl mx-auto"
    >
      <Card
        class="w-52 aspect-square rounded-3xl sm:translate-y-8"
        :image="boilerFaves"
        description="Tag your favorite dining hall meals and get notified when they’re served. Now part of the official Purdue Dining app!"
        name="Boiler Faves"
      />
      <Card
        class="w-52 aspect-square rounded-3xl sm:-translate-y-8"
        :image="purdueCorecMonitor"
        description="Live updates on facility usage at the Purdue CoRec. Plan your workouts smarter."
        name="Purdue CoRec Monitor"
      />
      <Card
        class="w-52 aspect-square rounded-3xl sm:translate-y-8"
        :image="safewalk"
        description="A modernization of campus blue light buttons. Request a police escort on campus with an Uber-like experience."
        name="SafeWalk"
      />
      <Card
        class="w-52 aspect-square rounded-3xl sm:-translate-y-8"
        :image="purdueLaundry"
        description="Check washer and dryer availability in real-time — no more wasted laundry trips."
        name="Purdue Laundry"
      />
      <Card
        class="w-52 aspect-square rounded-3xl sm:translate-y-8"
        :image="bucketlist"
        description="Explore our Bucket List of goals, missions, and milestones!"
        name="Bucket List"
      />
    </div>
  </section>
</template>

<script setup>
import DottedLine from "../components/DottedLine.vue";
import purdueLaundry from "../assets/purdueLaundry.png";
import safewalk from "../assets/safewalk.jpg";
import purdueCorecMonitor from "../assets/purdueCorecMonitor.png";
import boilerFaves from "../assets/boilerFaves.png";

import Card from "../components/Card.vue";
</script>
