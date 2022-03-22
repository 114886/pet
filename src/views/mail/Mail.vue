<template>
    <div>

        <MailTop />
        <van-row  gutter="80">
            <van-col span="9" v-for="item in vData" :key="item">
                <MailGoods
                    :picUrl="item.picUrl"
                    radius="15"
                    picWidth="160"
                    picHeight="160"
                    :currentPrice="item.currentPrice"
                    :originalPrice="item.originalPrice"
                    :title="item.title"
                />
            </van-col>
        </van-row>
    </div>
</template>

<script setup>
import MailTop from '../../components/mail/MailTop.vue'
import MailGoods from '../../components/mail/MailGoods.vue';
import { ref } from 'vue'

let vData = ref(null)
vData = [
    {
        goodsId: 1,
        picUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
        originalPrice: 6000,
        currentPrice: 4000,
        title: '【上门喂养】猫咪套餐'
    }, {
        goodsId: 2,
        picUrl: 'http://r8xvotwyy.hn-bkt.clouddn.com/cat10.jpg',
        originalPrice: 5000,
        currentPrice: 3000,
        title: '【上门喂养】猫咪套餐'
    }, {
        goodsId: 2,
        picUrl: 'http://r8xvotwyy.hn-bkt.clouddn.com/cat9.jpg',
        originalPrice: 5000,
        currentPrice: 3000,
        title: '【上门喂养】猫咪套餐'
    }, {
        goodsId: 2,
        picUrl: 'http://r8xvotwyy.hn-bkt.clouddn.com/cat11.jpg',
        originalPrice: 5000,
        currentPrice: 3000,
        title: '【上门喂养】猫咪套餐'
    },
]
</script>

<style scoped>

</style>