<template>
  <Top>
    <van-icon @click="go" name="arrow-left" />
    <span class="cover">{{ text }}</span>
    <van-icon name="search" />
  </Top>
  <Page :goodContent="goodContent"></Page>
</template>

<script>
import { getCurrentInstance, computed, ref, reactive } from "vue";
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    const text = proxy.$route.query.name;
    let goodContent = reactive([
      {
        goodId: 2,
        img: "http://r8xvotwyy.hn-bkt.clouddn.com/cat23.jpg",
        price: 111,
        goodName: "2222",
        access: "河北 邯郸",
        user: {
          id: 2,
          username: "小程",
          userImg: "http://r8xvotwyy.hn-bkt.clouddn.com/cat20.jpg",
        },
      },
      {
        goodId: 2,
        img: "http://r8xvotwyy.hn-bkt.clouddn.com/cat22.jpg",
        price: 111,
        goodName: "2222",
        access: "河北 邯郸",
        user: {
          id: 2,
          username: "小程",
          userImg: "http://r8xvotwyy.hn-bkt.clouddn.com/cat20.jpg",
        },
      },
      {
        goodId: 2,
        img: "http://r8xvotwyy.hn-bkt.clouddn.com/cat21.jpg",
        price: 111,
        goodName: "2222",
        access: "河北 邯郸",
        user: {
          id: 2,
          username: "小程",
          userImg: "http://r8xvotwyy.hn-bkt.clouddn.com/cat20.jpg",
        },
      },
      {
        goodId: 2,
        img: "http://r8xvotwyy.hn-bkt.clouddn.com/cat21.jpg",
        price: 111,
        goodName: "2222",
        access: "河北 邯郸",
        user: {
          id: 2,
          username: "小程",
          userImg: "http://r8xvotwyy.hn-bkt.clouddn.com/cat20.jpg",
        },
      },
    ]);
    const go = () => {
      proxy.$router.go(-1);
    };
    return { goodContent, go, text };
  },
};
</script>

<style lang="scss" scoped>
</style>