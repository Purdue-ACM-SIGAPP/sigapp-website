<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import About from "./sections/About.vue";
import Home from "./sections/Home.vue";
import Join from "./sections/Join.vue";
import Officer from "./sections/Officer.vue";
import Project from "./sections/Project.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen bg-2">
    <Header />
    <Home />
    <About />
    <Officer />
    <Project />
    <Join />
    <Footer />
  </div>
</template>

