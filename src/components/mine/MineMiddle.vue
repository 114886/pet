<template>
  <div>
    <div class="card">
      <van-row justify="space-between" align="center">
        <van-col span="6">
          <h4>常用信息</h4>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          <van-grid :column-num="4" :border="false">
            <van-grid-item icon="star-o" text="我的收藏" />
            <van-grid-item icon="clock-o" text="历史足迹" />
            <van-grid-item icon="gift-card-o" text="领券中心" />
            <van-grid-item icon="completed" text="收货地址" />
          </van-grid>
        </van-col>
      </van-row>
    </div>

    <div class="card card-1">
      <van-row justify="space-between" align="center">
        <van-col span="6">
          <h4>更多服务</h4>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          <van-grid :column-num="4" :border="false">
            <van-grid-item icon="sign" text="购宠协议" @click="handleClick" />
            <van-grid-item icon="records" text="平台声明" />
            <van-grid-item icon="shield-o" text="隐私政策" />
            <van-grid-item icon="completed" text="收货地址" />

            <van-grid-item icon="friends-o" text="在线客服" />
            <van-grid-item icon="service-o" text="客服热线" />
            <van-grid-item icon="question-o" text="用户帮助" />
            <van-grid-item icon="setting-o" text="我的设置" />
          </van-grid>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const handleClick = () => {
  proxy.$router.push("/protocol");
};
</script>

<style scoped>
.card-1 {
  margin-bottom: 65px !important;
}
* {
  margin: 0;
  padding: 0;
}
</style>