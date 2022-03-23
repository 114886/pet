import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: () => import('./views/login/Login.vue') },
    { path: '/mine', component: () => import('./views/mine/Mine.vue') },
    { path: '/protocol', component: () => import('./views/common/Protocol.vue')},
    { path: "/home", component: () => import('./views/Home.vue') },
    { path: "/login", component: () => import('./views/Login.vue') },
    { path: "/choose", component: () => import('./views/Goodchoose/HomeGoods.vue') },
    { path: "/petchoose", component: () => import('./views/Goodchoose/Petchoose.vue') },
    { path: "/search", component: () => import('./views/Search.vue') },
  ],
});