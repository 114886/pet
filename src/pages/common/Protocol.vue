<template>
    <div>
        <van-nav-bar title="购宠协议" left-arrow fixed @click-left="onClickLeft" />
        购宠协议购宠协议购宠协议购宠协议购宠协议购宠协议购宠协议购宠协议购宠协议购宠协议购宠协议购宠协议购宠协议购宠协议购宠协议购宠协议购宠协议购宠协议购宠协议购宠协议
    </div>
</template>

<script setup>

import { getCurrentInstance } from 'vue';

const onClickLeft = () => {
    return history.back()
}
</script>

<style lang='scss'scoped>
* {
    padding: 0;
    margin: 0;
}

:deep(.van-nav-bar__content) {
    --van-nav-bar-icon-color: black !important;
}
</style>