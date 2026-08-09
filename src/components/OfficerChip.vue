<template>
  <button
    type="button"
    class="officer-chip wobble-hover relative flex w-full items-center gap-3 text-left transition-shadow"
    :class="highlighted ? 'ring-2 ring-dark-green bg-light-green/40' : ''"
    @click="emit('select', officer)"
  >
    <img
      v-if="avatarSrc"
      :src="avatarSrc"
      :alt="officer.name"
      class="w-10 h-10 rounded-full object-cover shrink-0"
      draggable="false"
      loading="lazy"
      decoding="async"
    />
    <div
      v-else
      class="w-10 h-10 rounded-full bg-dark-green text-white flex items-center justify-center text-sm font-semibold shrink-0"
      aria-hidden="true"
    >
      {{ initials }}
    </div>

    <div class="min-w-0 flex-1">
      <p class="font-semibold text-dark">{{ officer.name }}</p>
      <p class="text-sm text-gray-500 mt-1">{{ officer.role }}</p>
    </div>

    <a
      v-if="officer.linkedin"
      :href="officer.linkedin"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="`Open ${officer.name}'s LinkedIn profile`"
      class="shrink-0 w-7 h-7 rounded-full overflow-hidden transition-transform duration-150 hover:scale-110 active:scale-90"
      @click.stop
    >
      <img
        :src="icons.linkedin"
        alt=""
        class="w-full h-full"
        draggable="false"
      />
    </a>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Officer } from "../content/officers";
import { icons } from "../content/site";

const props = defineProps<{ officer: Officer; highlighted?: boolean }>();
const emit = defineEmits<{ select: [officer: Officer] }>();

// Avatar fallback order: local image -> LinkedIn photo -> initials badge.
const avatarSrc = computed(
  () => props.officer.image || props.officer.linkedinPhoto,
);

const initials = computed(() =>
  props.officer.name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase(),
);
</script>
