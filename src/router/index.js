import { createRouter, createWebHistory } from "vue-router";

import ProfilePage from "@/pages/ProfilePage.vue";
import TipsPage from "@/pages/TipsPage.vue";

const routes = [
  { path: "/", name: "TipsPage", component: TipsPage },
  { path: "/profile", name: "ProfilePage", component: ProfilePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  defaultRoute: "/tips",
});

export default router;
