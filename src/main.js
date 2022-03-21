import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router";
import store from './store/index'
import './index.css'
import Vant from 'vant';
import '../node_modules/vant/lib/index.css';
import lazyPlugin from 'vue3-lazy'
import Nav from './components/Nav.vue'
import api from './utils/request'

// 将store、router挂载到全局变量上, 方便使用
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const app = createApp(App);
app.config.globalProperties.$store = useStore();
app.config.globalProperties.$router = useRoute();
app.component('Nav', Nav);
app.provide('$api', api);
app.use(Vant);
app.use(router);
app.use(store);
app.use(lazyPlugin, {
  loading: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-blog.csdnimg.cn%2F20210622114648174.gif&refer=http%3A%2F%2Fimg-blog.csdnimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650283551&t=5be46ff075c96c0a81b3145496485263', // 图片加载时默认图片
  error: 'https://img1.baidu.com/it/u=2655940096,3422380782&fm=253&fmt=auto&app=138&f=JPEG?w=582&h=500', // 图片加载失败时默认图片
});
app.mount("#app");