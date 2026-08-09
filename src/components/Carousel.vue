<template>
  <div
    class="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg aspect-video"
  >
    <Transition name="fade" mode="out-in">
      <div
        :key="currentIndex"
        class="absolute inset-0 bg-center bg-cover"
        :style="{ backgroundImage: `url(${images[currentIndex]})` }"
      ></div>
    </Transition>

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
import { aboutContent } from "../content/home";

export default {
  name: "Carousel",
  setup() {
    const images = aboutContent.carouselImages;
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
