<template>
  <div class="goods">
    <div>
      <span class="price">￥{{ goods.price }}</span>
      <span class="basic time same2">{{ goods.time }}</span>
    </div>
    <div class="introduce basic-text">{{ goods.indroduce }}</div>
    <div class="basic-text">
      <span class="basic same1 sex">{{ goods.sex }}</span>
      <span class="basic same1 same2 same3">{{ goods.state }}</span>
      <span class="basic same1 same2 same3">{{ goods.birth }}</span>
    </div>
    <div class="statement basic">{{ goods.statement }}</div>
    <div>
      <button class="btn">查看全部</button>
    </div>
    <div class="send">
      <div class="basic same2">配送</div>
      <div>
        <img :src="goods.icon" alt="" />
        <span class="basic">{{ goods.delivery }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue-demi";
export default {
  setup() {
    const goods = reactive({
      price: "12000",
      time: "2021-12-30发布",
      indroduce: "♥完美海双布偶mm 莫妮卡血🩸无病无癣✨",
      sex: "妹妹",
      state: "未绝育",
      birth: "2021-12-04生日",
      statement: "blblblblblblbllblblblblblblblbllblbl",
      icon: "/src/assets/check.png",
      delivery: "买家自提",
    });

    return {
      goods,
    };
  },
};
</script>

<style lang="scss" scoped>
.goods {
  border-radius: 20px;
  background-color: #fff;
  padding: 15px;
  margin: 10px 15px;

  display: flex;
  flex-direction: column;
  > div {
    margin: 5px 0;
  }

  .price {
    color: coral;
    font-size: 16px;
  }
  .basic-text {
    margin-bottom: 15px;
  }
  .basic {
    font-size: 10px;
  }
  .sex {
    border: 1px solid rgb(228, 16, 164);
    background-color: rgba(245, 142, 151,.4);
    color: rgb(228, 16, 164);
  }
  .time {
    margin-left: 15px;
  }
  .same2 {
    color: #aaa;
  }
  .same1 {
    margin-right: 5px;
    padding: 5px 10px;
    border-radius: 5px;
  }
  .same3 {
    background-color: #eee;
  }
  .btn {
    border: 0;
    background-color: transparent;
    font-size: 12px;
    padding-left: 0;
    color: rgb(22, 99, 177);
  }

  .send {
    display: flex;
    justify-content: left;
    img {
      width: 11px;
      height: 11px;
      margin-right: 5px;
    }
    > div {
      margin-right: 15px;
    }
  }
}
</style>