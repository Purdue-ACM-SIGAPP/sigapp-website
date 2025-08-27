<template>
  <div
    class="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg"
  >
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(img, index) in images"
        :key="index"
        class="min-w-full aspect-video bg-center bg-cover"
        :style="{ backgroundImage: `url(${img})` }"
      ></div>
    </div>

    <div
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2"
    >
      <span
        v-for="(img, index) in images"
        :key="'dot-' + index"
        class="w-2 h-2 rounded-full cursor-pointer"
        :class="currentIndex === index ? 'bg-white' : 'bg-gray-400'"
        @click="currentIndex = index"
      ></span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import BUCKETLIST from "../assets/BUCKETLIST24-25.jpg";
import SIGAPP24 from "../assets/SIGAPP24-25.jpg";
import SIGAPP21 from "../assets/SIGAPP21-22.png";

export default {
  name: "Carousel",
  setup() {
    const images = [SIGAPP24, BUCKETLIST, SIGAPP21];
    const currentIndex = ref(0);

    function prev() {
      currentIndex.value =
        (currentIndex.value - 1 + images.length) % images.length;
    }

    function next() {
      currentIndex.value = (currentIndex.value + 1) % images.length;
    }

    let intervalId;
    onMounted(() => {
      intervalId = setInterval(() => {
        next();
      }, 3000);
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    return { images, currentIndex, prev, next };
  },
};
</script>
