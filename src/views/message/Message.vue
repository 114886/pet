<template>
  <van-nav-bar title="消息" fixed z-index="2" />
  <van-nav-bar title="为您推荐" fixed z-index="1" />
  <div style="height: 46px"></div>
  <div class="msg">
    <msg-bar />
    <van-nav-bar title="为您推荐" />
  </div>
  <van-sticky position="bottom">
    <Nav></Nav>
  </van-sticky>
</template>

<script>
import { ref } from "vue";
import MsgBar from "/src/components/message/MsgBar.vue";

export default {
  components: {
    MsgBar,
  },
  setup() {
    const isShow = ref(true);
    const cancel = () => {
      isShow.value = !isShow.value;
    };

    return {
      isShow,
      cancel,
    };
  },
  onMounted() {},
};
</script>

<style scoped>
</style>