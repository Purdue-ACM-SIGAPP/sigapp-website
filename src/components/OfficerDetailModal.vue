<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="officer"
        class="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60"
        @click.self="emit('close')"
      >
        <div
          class="relative w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl"
        >
          <button
            type="button"
            class="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200"
            aria-label="Close"
            @click="emit('close')"
          >
            <span class="text-lg leading-none">&times;</span>
          </button>

          <img
            v-if="avatarSrc"
            :src="avatarSrc"
            :alt="officer.name"
            class="mx-auto w-28 h-28 rounded-full object-cover shadow-lg"
            draggable="false"
          />
          <div
            v-else
            class="mx-auto w-28 h-28 rounded-full bg-dark-green text-white flex items-center justify-center text-3xl font-semibold shadow-lg"
            aria-hidden="true"
          >
            {{ initials }}
          </div>

          <h3 class="mt-5 text-2xl font-bold text-dark">{{ officer.name }}</h3>

          <div class="mt-5 flex flex-col gap-2">
            <div
              v-for="pos in positions"
              :key="pos.role + pos.year"
              class="rounded-xl bg-gray-50 px-4 py-2 text-sm"
            >
              <span class="font-semibold text-dark">{{ pos.role }}</span>
              <span v-if="pos.year" class="text-gray-500">
                · {{ pos.year }}</span
              >
            </div>
          </div>

          <a
            v-if="officer.linkedin"
            :href="officer.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="link-green mt-6 inline-block text-sm"
          >
            View LinkedIn profile →
          </a>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, watch } from "vue";
import { allOfficers, type Officer } from "../content/officers";

const props = defineProps<{ officer: Officer | null }>();
const emit = defineEmits<{ close: [] }>();

const avatarSrc = computed(
  () => props.officer?.image || props.officer?.linkedinPhoto,
);

const initials = computed(() =>
  (props.officer?.name ?? "")
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase(),
);

// This person's full position history, looked up from the master roster —
// not just the single role/year the card that opened this modal was showing.
const positions = computed(() => {
  if (!props.officer) return [];
  const record = allOfficers.find((o) => o.name === props.officer!.name);
  return record?.positions ?? [{ role: props.officer.role, year: "" }];
});

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") emit("close");
}

watch(
  () => props.officer,
  (officer) => {
    document.body.style.overflow = officer ? "hidden" : "";
  },
);

onMounted(() => document.addEventListener("keydown", onKeydown));
onUnmounted(() => {
  document.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active > div,
.modal-fade-leave-active > div {
  transition: transform 0.2s ease;
}
.modal-fade-enter-from > div,
.modal-fade-leave-to > div {
  transform: scale(0.95);
}

@media (prefers-reduced-motion: reduce) {
  .modal-fade-enter-active,
  .modal-fade-leave-active,
  .modal-fade-enter-active > div,
  .modal-fade-leave-active > div {
    transition: none;
  }
}
</style>
