<template>
  <van-row class="row1" justify="space-between">
    <van-col span="5" offset="1">优宠专选</van-col>
    <van-col span="6">
      <span>查看全部</span>
      <van-icon name="arrow" />
    </van-col>
  </van-row>

  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in images" :key="image.id">
      <img :src="image.img" />
    </van-swipe-item>
  </van-swipe>

  <van-tabs v-model:active="active">
    <van-tab v-for="item in titles" :key="item" :title="item">
      <van-grid :column-num="2" :gutter="10">
        <van-grid-item
          v-for="contentItem in contents"
          :key="contentItem.goodId"
        >
          <div class="van-image">
            <img v-lazy="contentItem.img" />
          </div>
          <!-- <van-image :src="contentItem.img" /> -->
          <div class="describe">
            <div class="describe-1">
              <span>{{ contentItem.goodName }}</span>
              <span>￥{{ contentItem.price }}</span>
            </div>
            <div class="describe-2">
              <div>
                <img class="lImg" v-lazy="contentItem.user.userImg" />
                <span>{{ contentItem.user.username }}</span>
              </div>
              <span>{{ contentItem.access }}</span>
            </div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-tab>
  </van-tabs>
</template>

<script>
import { getCurrentInstance, computed, ref, reactive } from "vue";
export default {
  name: "Home",
  setup() {
    // const { proxy } = getCurrentInstance();
    // 使用store
    // const count = computed(() => proxy.$store.state.count);
    const titles = ["全部", "推荐", "猫咪", "狗狗", "异宠"];
    const contents = reactive([
      {
        goodId: 1,
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
    const images = reactive([
      {
        id: 1,
        img: "http://r8xvotwyy.hn-bkt.clouddn.com/cat2.jpg",
        name: "111",
      },
      {
        id: 2,
        img: "http://r8xvotwyy.hn-bkt.clouddn.com/cat6.jpg",
        name: "222",
      },
      {
        id: 3,
        img: "http://r8xvotwyy.hn-bkt.clouddn.com/cat4.jpg",
        name: "222",
      },
    ]);
    const active = ref(0);
    return { images, active, titles, contents };
  },
};
</script>

<style lang="scss" scoped>
.row1 {
  margin: 10px 0;
  > :first-child {
    font-weight: 800;
  }
  > :last-child {
    font-size: 13px;
  }
}

.van-col {
  display: flex;
  align-items: center;
  justify-content: center;
}

.van-swipe {
  border-radius: 10px 10px 0 0;
  img {
    width: 100%;
  }
}

.van-tab__panel {
  margin-top: 10px;
}

.van-image {
  position: relative;
  display: inline-block;
  border-radius: 10px;
  > img {
    display: block;
    width: 100%;
    border-radius: 10px;
    height: 100%;
  }
}

.describe {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  > .describe-1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    > :first-child {
      font-weight: 700;
      font-size: 16px;
    }
    > :last-child {
      color: coral;
    }
  }
  > .describe-2 {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    > span {
      font-weight: 300;
      font-size: 12px;
    }
    > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      > img {
        width: 20px;
        height: 20px;
      }
      > span {
        margin-left: 3px;
        font-weight: 300;
        font-size: 12px;
      }
    }
  }
}
</style>
