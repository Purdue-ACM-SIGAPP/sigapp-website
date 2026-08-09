<template>
  <div v-reveal class="text-center mb-6">
    <h1 class="section-title mb-4">{{ title }}</h1>
    <SquiggleLine class="mx-auto" />
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
import SquiggleLine from "./SquiggleLine.vue";

defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>
