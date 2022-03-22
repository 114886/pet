<template>
  <Top>
    <van-icon @click="go" name="arrow-left" />
    <span class="cover">优宠精选</span>
    <span></span>
  </Top>
  <Page :goodContent="goodContent"></Page>
</template>

<script>
import { getCurrentInstance, computed, ref, reactive } from "vue";
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    let goodContent = reactive([
      {
        goodId: 1,
        type: "cat",
        img: "http://r8xvotwyy.hn-bkt.clouddn.com/cat2.jpg",
        price: 330,
        goodName: "花花",
        access: "河北 邯郸",
        user: {
          id: 1,
          username: "小超",
          userImg: "http://r8xvotwyy.hn-bkt.clouddn.com/cat10.jpg",
        },
      },
      {
        goodId: 3,
        img: "http://r8xvotwyy.hn-bkt.clouddn.com/cat18.jpg",
        price: 3333,
        goodName: "qq",
        access: "河北 邯郸",
        user: {
          id: 3,
          username: "小韩",
          userImg: "http://r8xvotwyy.hn-bkt.clouddn.com/cat17.jpg",
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
        img: "http://r8xvotwyy.hn-bkt.clouddn.com/cat26.jpg",
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
        img: "http://r8xvotwyy.hn-bkt.clouddn.com/cat25.jpg",
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
        img: "http://r8xvotwyy.hn-bkt.clouddn.com/cat24.jpg",
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
    return { goodContent, go };
  },
};
</script>

<style lang="scss" scoped>
.cover {
  margin-right: 20px;
}
</style>