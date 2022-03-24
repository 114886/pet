<template>
  <div class="msg-bar" @click="goDetail">
    <div class="left">
      <img src="/src/views/message/img/wechat.png" class="icon" alt="" />
      <div class="text">
        <div class="text-1">微信通知</div>
        <div class="text-2">开启微信通知，及时查看消息和订单状态</div>
      </div>
    </div>
    <div class="right text-2">刚刚</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const goDetail = () => {
      router.push({
        path: "/msg-detail",
      });
    };

    return {
      goDetail,
    };
  },
};
</script>

<style scoped>
.msg-bar {
  display: flex;
  justify-content: space-between;
}
.left {
  display: flex;
  justify-content: left;
}
.right {
  color: #bbb;
  font-size: 10px;
  margin: 10px 15px 0 0;
}
.icon {
  margin-left: 15px;
  margin-top: 5px;
}
.text {
  margin-left: 10px;
}
.text-1 {
  font-size: 16px;
  font-weight: 600;
  margin-top: 5px;
}
.text > .text-2 {
  font-size: 10px;
  margin: 10px 0;
  color: #ccc;
}
</style>