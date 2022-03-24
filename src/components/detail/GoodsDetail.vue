<template>
  <div class="overall">
    <!-- title后续会动态绑定数据，或者可能不用这个vant？ -->

    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image.id">
        <img :src="image.img" />
      </van-swipe-item>
    </van-swipe>
    <GoodsText class="basic" />
    <GoodsSeller class="basic" />
    <GoodsComment class="basic" />
    <GoodsBottom class="btm" />
  </div>
</template>

<script>
import { reactive, ref } from "vue-demi";
import GoodsText from "./GoodsText.vue";
import GoodsSeller from "./GoodsSeller.vue";
import GoodsComment from "./GoodsComment.vue";

import GoodsBottom from "./GoodsBottom.vue";

export default {
  components: {
    GoodsText,
    GoodsSeller,
    GoodsComment,
    GoodsBottom,
  },
  setup() {
    const images = reactive([
      {
        id: 1,
        img: "http://r8xvotwyy.hn-bkt.clouddn.com/cat16.jpg",
        name: "111",
      },
      {
        id: 2,
        img: "http://r8xvotwyy.hn-bkt.clouddn.com/cat19.jpg",
        name: "222",
      },
      {
        id: 3,
        img: "http://r8xvotwyy.hn-bkt.clouddn.com/cat18.jpg",
        name: "222",
      },
    ]);

    return {
      images,
    };
  },
};
</script>

<style lang="scss" scoped>
.overall {
  background-color: #eee;
  width: 100vw;
  position: absolute;

  .van-swipe {
    border-radius: 10px 10px 0 0;
    img {
      width: 100%;
    }
  }
  .basic {
    position: relative;
    top: -40px;
  }
  .btm {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
  }
}
</style>