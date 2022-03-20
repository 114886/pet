<template>
  <router-view />
  <van-sticky position="bottom">
    <Nav></Nav>
  </van-sticky>
  <van-sticky :offset-bottom="70" position="bottom" @click="goTop">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shengdanjianhuahuidaodingbu"></use>
    </svg>
  </van-sticky>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "App",
  setup() {
    const goTop = () => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
    return { goTop };
  },
};
</script>

<style lang="scss" scoped>
.icon {
  padding-left: 15px;
}
</style>

