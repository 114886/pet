<template>
    <div class="mailGoods-item">
        <van-image
            :src="props.picUrl"
            :radius="props.radius"
            :width="props.picWidth"
            :height="props.picHeight"
            fit="cover"
        />

        <span class="title">{{ props.title }}</span>
        <div class="price">
            <van-row justify="space-between">
                <van-col span="5" class="currentPrice">¥{{ props.currentPrice }}</van-col>
                <van-col span="5" class="originalPrice">¥{{ props.originalPrice }}</van-col>
            </van-row>
        </div>
    </div>
</template>


<script>

export default {
    name: 'MailGoods',
    props: {
        picUrl: {
            type: String,
            default: 'https://img.yzcdn.cn/vant/cat.jpeg'
        },
        radius: {
            type: Number,
            default: 0
        },
        picWidth: {
            type: Number,
            default: 100
        },
        picHeight: {
            type: Number,
            default: 100
        },
        currentPrice: {
            type: Number,
            default: 0
        },
        originalPrice: {
            type: Number,
            default: 0
        },
        title: {
            type: String,
            default: ""
        }
    },
    setup(props, context) {

        return {
            props
        }

    }
}



</script>

<style scoped>
.mailGoods-item {
    margin: 10px 20px;
}
.currentPrice {
    color: #ff6666;
    font-size: 18px;
    font-weight: 500;
}
.originalPrice {
    color: #999999;
    text-decoration: line-through;
    font-size: 15px;
}
.title {
    font-size: smaller;
    white-space: nowrap;
}
</style>