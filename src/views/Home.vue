<template>
  <div class="container0">
    <van-row class="top-1">
      <van-col span="12" offset="1">
        <van-search
          shape="round"
          v-model="value"
          background="transparent"
          placeholder="搜索宠物或商家"
        />
      </van-col>
      <van-col span="2" offset="7">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </van-col>
    </van-row>
    <van-row class="top-2" justify="space-around">
      <van-col span="3">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fujin1"></use>
        </svg>
        <span>附近</span>
      </van-col>
      <van-col span="3">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-007-cat"></use>
        </svg>
        <span>猫咪</span>
      </van-col>
      <van-col span="3">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gougou-"></use>
        </svg>
        <span>狗狗</span>
      </van-col>
      <van-col span="3">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tuzi"></use>
        </svg>
        <span>异宠</span>
      </van-col>
    </van-row>
  </div>
  <div class="container">
    <Goods></Goods>
  </div>
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
import { ref } from "vue";
import Goods from "../components/Home/Goods.vue";

export default {
  components: { Goods },
  setup() {
    const goTop = () => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
    const value = ref("");
    return { value, goTop };
  },
};
</script>

<style lang="scss" scoped>
.top-1 {
  padding-top: 25px;
  align-items: center;
}
.top-2 {
  margin-top: 70px;
  padding-bottom: 10px;
  > .van-col {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > span {
      font-weight: 600;
      font-size: 13px;
    }
  }
}
.container0 {
  background: url("../assets/4.png") no-repeat 0 0;
  background-size: cover;
  border-radius: 0 0 10px 10px;
}
</style>