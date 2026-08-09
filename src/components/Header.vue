<template>
  <header
    ref="headerRef"
    :class="{ '-translate-y-full': isHidden }"
    class="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-light-green/70 shadow-sm text-dark z-50 transition-transform duration-700 ease-in-out"
  >
    <div
      class="flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-2 px-6 py-3"
    >
      <RouterLink
        to="/"
        class="flex items-center gap-2 font-semibold hover:text-dark-green transition"
      >
        <img
          :src="siteContent.logo"
          alt=""
          class="h-7 w-auto"
          draggable="false"
        />
        {{ siteContent.orgName }}
      </RouterLink>

      <!-- Primary nav -->
      <nav class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        <a
          v-for="link in navLinks"
          :key="link.hash"
          class="hover:text-dark-green underline decoration-transparent hover:decoration-dark-green underline-offset-4 transition cursor-pointer"
          @click.prevent="scrollTo(link.hash)"
          >{{ link.label }}</a
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
import { siteContent, navLinks } from "../content/site";

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
  window.open(siteContent.discordUrl, "_blank");
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
