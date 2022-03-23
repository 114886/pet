<template>
  <div class="container0">
    <van-row class="top-1">
      <van-col span="12" offset="1">
        <van-search
          shape="round"
          background="transparent"
          placeholder="搜索宠物或商家"
          @click="go(4)"
        />
      </van-col>
      <van-col @click="showShare = true" span="2" offset="7">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </van-col>
      <van-share-sheet
        v-model:show="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
      />
    </van-row>
    <van-row class="top-2" justify="space-around">
      <van-col @click="go(0)" span="3">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fujin1"></use>
        </svg>
        <span>附近</span>
      </van-col>
      <van-col @click="go(1)" span="3">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-007-cat"></use>
        </svg>
        <span>猫咪</span>
      </van-col>
      <van-col @click="go(2)" span="3">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gougou-"></use>
        </svg>
        <span>狗狗</span>
      </van-col>
      <van-col @click="go(3)" span="3">
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
    <svg class="icon icon-xxx" aria-hidden="true">
      <use xlink:href="#icon-shengdanjianhuahuidaodingbu"></use>
    </svg>
  </van-sticky>
</template>

<script>
import { ref, getCurrentInstance } from "vue";
import { Toast } from "vant";
import Goods from "../components/Home/Goods.vue";

export default {
  components: { Goods },
  setup() {
    const showShare = ref(false);
    const onSelect = (option) => {
      Toast(option.name);
      showShare.value = false;
    };
    const options = [
      [
        { name: "微信", icon: "wechat" },
        { name: "朋友圈", icon: "wechat-moments" },
        { name: "微博", icon: "weibo" },
        { name: "QQ", icon: "qq" },
      ],
      [
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
        { name: "小程序码", icon: "weapp-qrcode" },
      ],
    ];
    const { proxy } = getCurrentInstance();
    const go = (e) => {
      let text = ref("附近");
      if (e === 1) {
        text.value = "猫咪";
      } else if (e === 2) {
        text.value = "狗狗";
      } else if (e === 3) {
        text.value = "异宠";
      } else if (e === 4) {
        proxy.$router.push("/search");
        return;
      }
      proxy.$router.push({ path: "/petchoose", query: { name: text.value } });
    };
    const goTop = () => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
    return { goTop, go, options, showShare, onSelect };
  },
};
</script>

<style lang="scss" scoped>
.icon-xxx {
  padding-left: 15px;
}
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