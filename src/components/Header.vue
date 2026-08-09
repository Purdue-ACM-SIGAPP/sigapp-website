<template>
  <header
    ref="headerRef"
    :class="{ '-translate-y-full': isHidden }"
    class="fixed top-0 w-full bg-grey text-dark z-50 transition-transform duration-300"
  >
    <div
      class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-4"
    >
      <!-- Primary nav -->
      <nav class="flex flex-wrap items-center gap-x-5 gap-y-2">
        <RouterLink
          to="/"
          class="font-semibold hover:text-dark-green underline decoration-transparent hover:decoration-dark-green underline-offset-4 transition"
        >
          Purdue ACM SIGAPP
        </RouterLink>
        <a
          class="hover:text-dark-green underline decoration-transparent hover:decoration-dark-green underline-offset-4 transition cursor-pointer"
          @click.prevent="scrollTo('#about')"
          >About Us</a
        >
        <a
          class="hover:text-dark-green underline decoration-transparent hover:decoration-dark-green underline-offset-4 transition cursor-pointer"
          @click.prevent="scrollTo('#officer')"
          >Current Officers</a
        >
        <a
          class="hover:text-dark-green underline decoration-transparent hover:decoration-dark-green underline-offset-4 transition cursor-pointer"
          @click.prevent="scrollTo('#project')"
          >Our Projects</a
        >
        <button type="button" class="btn-primary" @click="handleJoin">
          Join Us
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, provide } from "vue";
import { useRouter } from "vue-router";
import { headerHeight } from "../globals";

const router = useRouter();
const isHidden = ref(false);
const headerRef = ref<HTMLElement | null>(null);
let lastScrollY = 0;

const handleScroll = () => {
  const currentY = window.scrollY;
  isHidden.value = currentY > lastScrollY && currentY > 50;
  lastScrollY = currentY;
};

const updateHeaderHeight = () => {
  if (headerRef.value) {
    const h = headerRef.value.offsetHeight;
    if (headerHeight.value !== h) headerHeight.value = h;
  }
};

const scrollTo = (hash: string) => {
  router.push({ path: "/", hash });
};

const handleJoin = () => {
  window.open("https://discord.gg/jKTWKYarGE", "_blank");
};

provide("headerHeight", headerHeight);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  updateHeaderHeight();
  window.addEventListener("resize", updateHeaderHeight);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", updateHeaderHeight);
});
</script>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
}
</style>
