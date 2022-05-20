import { createRouter, createWebHistory } from "vue-router";

// User Page
import AppLayout from "@/layouts/app/Layout.vue";
import Home from "@/views/Home.vue";

const routes = [
  // unprotected routes
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
