<template>
  <van-sticky class="xxx_van" :offset-top="49">
    <van-dropdown-menu active-color="#1989fa">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
      <van-dropdown-item v-model="value4" :options="option4" />
    </van-dropdown-menu>
  </van-sticky>
  <div class="container">
    <div
      class="contentsBox"
      v-for="contentItem in contents"
      :key="contentItem.goodId"
    >
      <img v-lazy="contentItem.img" />
      <div class="textBox">
        <div class="t_top">
          <span>{{ contentItem.goodName }}</span>
          <span>￥{{ contentItem.price }}</span>
        </div>
        <div class="t_bottom">
          <div class="t_bottom_1">
            <img v-lazy="contentItem.user.userImg" />
            <span>{{ contentItem.user.username }}</span>
          </div>
          <span>{{ contentItem.access }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, computed, ref, reactive } from "vue";
export default {
  props: ["goodContent"],
  setup(props) {
    const value1 = ref(0);
    const value2 = ref("a");
    const value3 = ref("aa");
    const value4 = ref("11");
    const option1 = [{ text: "全国", value: 0 }];
    const option2 = [
      { text: "价格", value: "a" },
      { text: "不限", value: "b" },
      { text: "3000以下", value: "c" },
      { text: "3000-5000", value: "d" },
    ];
    const option4 = [
      { text: "绝育", value: "11" },
      { text: "不限", value: "12" },
      { text: "已绝育", value: "13" },
      { text: "未绝育", value: "14" },
    ];
    const option3 = [
      { text: "性别", value: "aa" },
      { text: "不限", value: "bc" },
      { text: "公", value: "cc" },
      { text: "母", value: "dd" },
    ];
    let contents = reactive([]);
    contents = props.goodContent;
    return {
      contents,
      value1,
      value2,
      option1,
      option2,
      value3,
      value4,
      option3,
      option4,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  > .contentsBox {
    width: 43%;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    > img {
      border-radius: 10px;
      width: 100%;
      height: 150px;
      object-fit: cover;
      margin-bottom: 5px;
    }
    > .textBox {
      display: flex;
      flex-direction: column;
      > .t_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        margin-bottom: 5px;
        > :first-child {
          font-weight: 700;
          font-size: 16px;
        }
        > :last-child {
          color: coral;
        }
      }
      > .t_bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        > .t_bottom_1 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          > img {
            border-radius: 5px;
            width: 20px;
            height: 20px;
            object-fit: cover;
          }
          > span {
            margin-left: 3px;
            font-weight: 300;
            font-size: 12px;
          }
        }
        > span {
          font-weight: 300;
          font-size: 12px;
        }
      }
    }
  }
}
</style>