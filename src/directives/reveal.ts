import type { Directive } from "vue";

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// v-reveal="200" fades/slides an element in once it scrolls into view.
// The value (optional, ms) staggers the transition-delay for sequenced reveals.
export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    if (reduceMotion) return;

    el.classList.add("reveal");
    if (binding.value) {
      el.style.transitionDelay = `${binding.value}ms`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("reveal-visible");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
  },
};
