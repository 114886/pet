import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/home", component: () => import('./views/Home.vue') },
    { path: "/login", component: () => import('./views/Login.vue') },
  ],
});