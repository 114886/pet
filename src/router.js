import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: () => import('./components/HelloWorld.vue') },
    { path: '/mine', component: () => import('./pages/mine/Mine.vue') },
    { path: '/protocol', component: () => import('./pages/common/Protocol.vue')}
  ],
});