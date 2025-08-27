<template>
  <header
    ref="headerRef"
    :class="{ '-translate-y-full': isHidden }"
    class="fixed top-0 w-full bg-grey text-dark z-50 transition-transform duration-300"
  >
    <div class="flex flex-wrap justify-center items-center gap-6 p-4">
      <a href="#home" class="font-semibold hover:text-dark-green transition"
        >Purdue ACM SIGAPP</a
      >
      <a href="#about" class="hover:text-dark-green transition">About Us</a>
      <a href="#officer" class="hover:text-dark-green transition"
        >Current Officers</a
      >
      <a href="#project" class="hover:text-dark-green transition"
        >Our Projects</a
      >

      <button
        type="button"
        class="bg-dark text-white font-bold rounded-3xl px-4 py-2 hover:bg-dark-green transition"
        @click="handleClick"
      >
        Join Us
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, provide } from "vue";
import { headerHeight } from "../globals";

const isHidden = ref(false);
let lastScrollY = 0;

const handleScroll = () => {
  const currentY = window.scrollY;
  if (currentY > lastScrollY && currentY > 50) {
    isHidden.value = true; // Scrolling down, hide header
  } else {
    isHidden.value = false; // Scrolling up, show header
  }
  lastScrollY = currentY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleClick = () => {
  window.open("https://discord.gg/jKTWKYarGE", "_blank");
};

const headerRef = ref(null);

const updateHeaderHeight = () => {
  if (headerRef.value) {
    const newHeight = headerRef.value.offsetHeight;
    if (headerHeight.value !== newHeight) {
      headerHeight.value = newHeight;
    }
  }
};

provide("headerHeight", headerHeight);

onMounted(() => {
  updateHeaderHeight();
  window.addEventListener("resize", updateHeaderHeight);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateHeaderHeight);
});
</script>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
}
</style>
