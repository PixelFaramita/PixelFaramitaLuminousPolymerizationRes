import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/config",
      name: "config",
      component: () => import("../views/ConfigView.vue"),
    },
    {
      path: "/document",
      name: "document",
      component: () => import("../views/DocumentView.vue"),
    },
    {
      path: "/install",
      name: "install",
      component: () => import("../views/InstallGuideView.vue"),
    },
    {
      path: "/install_pannel",
      name: "install_pannel",
      component: () => import("../views/InstallGuideForPanelView.vue"),
    },
    {
      path: "/editor",
      name: "editor",
      component: () => import("../views/EditorView.vue"),
    },
    {
      path: "/save",
      name: "save",
      component: () => import("../views/SaveView.vue"),
    },
  ],
});

export default router;
