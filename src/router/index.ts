import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import PastOfficersPage from "../pages/PastOfficersPage.vue";
import PastProjectsPage from "../pages/PastProjectsPage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/past-officers", component: PastOfficersPage },
    { path: "/past-projects", component: PastProjectsPage },
  ],
  scrollBehavior(to: { hash?: string }) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => resolve({ el: to.hash, behavior: "smooth" }), 100);
      });
    }
    return { top: 0 };
  },
});
