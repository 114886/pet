<template>
  <div>
    {{ count }}
    <p @click="handleSkip">跳转</p>
    <p @click="handleSkip2">点我</p>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
import { getCurrentInstance, computed, ref } from "vue";
export default {
  name: "Home",
  setup() {
    const { proxy } = getCurrentInstance();
    // 使用store
    const count = computed(() => proxy.$store.state.count);
    const handleSkip = () => {
      // 使用router
      proxy.$router.push("/xxx");
    };
    const handleSkip2 = () => {
      proxy.$store.commit("increment");
    };

    return {
      count: ref(count), // 一样 无所谓 computed已经转换了
      handleSkip,
      handleSkip2
    };
  },
};
</script>
