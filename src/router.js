import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: () => import('./views/login/Login.vue') },
    { path: '/mine', component: () => import('./views/mine/Mine.vue') },
    { path: '/protocol', component: () => import('./views/common/Protocol.vue') },
    { path: "/home", component: () => import('./views/Home.vue') },
    { path: "/login", component: () => import('./views/login/Login.vue') },
    { path: "/message", component: () => import('./views/message/Message.vue') },
    { path:"/msg-detail",component:()=>import('./components/message/MsgDetail.vue')},
    { path:"/detail",component:()=>import('./components/detail/GoodsDetail.vue')}
  ],
});