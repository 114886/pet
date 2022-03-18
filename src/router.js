import { createWebHashHistory, createRouter } from "vue-router";
import HelloWorld from './App.vue'

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: HelloWorld },
  ],
});