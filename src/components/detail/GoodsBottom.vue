<template>
  <div class="btm">
    <div>
      <img src="./img/share.png" alt="" />
      <div class="basic">分享</div>
    </div>
    <div @click="change">
      <img src="./img/collect.png" alt="" v-show="!isShow" />
      <img src="./img/collect-active.png" alt="" v-show="isShow" />
      <div class="basic">收藏</div>
    </div>
    <div class="service">在线咨询</div>
    <div class="pay">担保支付</div>
  </div>
</template>

<script>
import { ref } from "vue-demi";
export default {
  setup() {
    const isShow = ref(false);
    const change = () => {
      isShow.value = !isShow.value;
    };

    return {
      isShow,
      change,
    };
  },
};
</script>

<style lang="scss" scoped>
.btm {
  padding: 5px;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 25px;
    height: 25px;
  }
  .basic {
    font-size: 10px;
    text-align: center;
    letter-spacing: 1px;
  }
  .service {
    background-color: black;
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    letter-spacing: 2px;
  }
  .pay {
    background-color: rgb(253, 165, 32);
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    letter-spacing: 2px;
  }
}
</style>