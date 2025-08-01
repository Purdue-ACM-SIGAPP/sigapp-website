<template>
  <header
    class="fixed top-0 left-1/2 -translate-x-1/2 w-full bg-grey text-stone-600 z-50 transition-transform duration-300"
    :class="{ '-translate-y-full': isHidden }"
  >
    <div class="flex flex-wrap justify-center gap-6 p-4">
      <a href="#home" class="whitespace-nowrap font-semibold hover:text-stone-950 transition">Purdue ACM SIGAPP</a>        
      <a href="#about" class="whitespace-nowrap hover:text-stone-950 transition">About Us</a>        
      <a href="#officer" class="whitespace-nowrap hover:text-stone-950 transition">Current Officers</a>
      <a href="#project" class="whitespace-nowrap hover:text-stone-950 transition">Our Projects</a>

      <button @click="handleClick" class="whitespace-nowrap bg-black text-white font-bold rounded-lg px-4 py-2 hover:bg-stone-800 transition">
        Join Us
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isHidden = ref(false)
let lastScrollY = 0

const handleScroll = () => {
  const currentY = window.scrollY
  if (currentY > lastScrollY && currentY > 50) {
    isHidden.value = true  // Scrolling down, hide header
  } else {
    isHidden.value = false // Scrolling up, show header
  }
  lastScrollY = currentY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleClick = () => {
  window.location.href = "https://example.com/join"; 
}
</script>

<style scoped>
/* transition handled by Tailwind, but you can add easing if needed */
</style>
