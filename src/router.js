import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: () => import('./components/HelloWorld.vue') },
  ],
});