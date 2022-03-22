<template>
  <van-tabbar route>
    <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/xxx" icon="aim">发现</van-tabbar-item>
    <van-tabbar-item replace to="/" icon="shopping-cart-o"
      >商城</van-tabbar-item
    >
    <van-tabbar-item replace to="/" icon="chat-o" badge="8"
      >消息</van-tabbar-item
    >
    <van-tabbar-item replace to="/mine" icon="user-circle-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>