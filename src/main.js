import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router";
import store from './store/index'
import './index.css'
import Vant from 'vant';
import '../node_modules/vant/lib/index.css';

// 将store、router挂载到全局变量上, 方便使用
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const app = createApp(App);
app.config.globalProperties.$store = useStore();
app.config.globalProperties.$router = useRoute();
app.use(Vant);
app.use(router);
app.use(store);
app.mount("#app");