import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/loGin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: "/", name: "Login", component: Login }],
});

export default router;
