<template>
<div class="content-1">
  <div class="logo">
    <img src="./img/pet.png" alt="" />
  </div>
  <div class="container">
    <div class="login-box" v-show="isShow">
      <div class="title left">Login</div>
      <div class="text">
        <input
          type="text"
          class="input"
          placeholder="Input your username"
          v-model="loginName"
        />
      </div>
      <div class="text">
        <input
          type="password"
          class="input"
          placeholder="Input your password"
          v-model="loginPwd"
        />
        <span class="see-pwd" @click="changeType">
          <img src="./img/see.png" class="see" alt="" />
        </span>
      </div>
      <div class="btn" @click="login">
        <span>登录</span>
      </div>
      <div class="block"></div>
      <div class="change" @click="changeItem">
        <img src="./img/change.png" class="icon" alt="" />
      </div>
    </div>

    <div class="sign-box" v-show="!isShow">
      <div class="title right">Register</div>
      <div class="text">
        <input
          type="text"
          class="input"
          placeholder="Have A Good Name?"
          v-model="signName"
        />
      </div>
      <div class="text">
        <input
          type="password"
          class="input"
          placeholder="Keep Secret"
          v-model="signPwd"
        />
        <span class="see-pwd" @click="changeType">
          <img src="./img/see.png" class="see" alt="" />
        </span>
      </div>
      <div class="btn" @click="sign">
        <span>注册</span>
      </div>
      <div class="block"></div>
      <div class="icon" @click="changeItem">
        <img src="./img/change.png" alt="" />
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
import { reactive, ref, onMounted } from "vue";

import request from "../../utils/request";

export default {
  setup() {
    const isShow = ref(true);
    const changeItem = () => {
      isShow.value = !isShow.value;
    };
    const user = ref({
      loginName: "",
      loginPwd: "",
      signName: "",
      signPwd: "",
    });
    const login = () => {
      if (loginName) {
      }
    };

    return {
      isShow,
      changeItem,
      user,
      login,
    };
  },
};
</script>

<style scoped>
@import "./login.css";
</style>