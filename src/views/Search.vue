<template>
  <Top>
    <van-icon @click="go" name="arrow-left" />
    <van-search
      shape="round"
      v-model="value"
      background="transparent"
      placeholder="搜索宠物或商家"
    />
    <span>搜索</span>
  </Top>
  <div class="wei">
    <span>为你推荐</span>
  </div>
  <Page id="xx" :goodContent="goodContent"></Page>
</template>

<script>
import { getCurrentInstance, computed, ref, reactive } from "vue";
export default {
  setup() {
    const value = ref("");
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
    return { goodContent, go, value };
  },
};
</script>

<style>
.xxx_van {
  display: none;
}
</style>
<style scoped>
.wei{
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(243, 157, 29);
  text-shadow: 0 0 3px rgb(231, 143, 143);
}
</style>