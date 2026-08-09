<template>
  <div class="text-center mb-6">
    <h1 class="section-title mb-4">{{ title }}</h1>
    <DottedLine class="mx-auto" />
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
import DottedLine from "./DottedLine.vue";

defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>
