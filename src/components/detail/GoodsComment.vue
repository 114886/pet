<template>
  <div class="comment">
    <div class="title">
      <span class="title-1">买家评论</span>
      <span class="title-2">全部 ></span>
    </div>
    <div class="main">
      <img :src="comment.icon" alt="" />
      <div class="main-text">
        <div class="msg">
          <span class="name">{{ comment.name }}</span>
          <span class="time">{{ comment.time }}</span>
        </div>
        <div>
          <span class="mark">
            <img :src="comment.logo" alt="" />
            {{ comment.mark }}
          </span>
        </div>
        <div class="evaluate">{{ comment.evaluate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue-demi";
export default {
  setup() {
    const comment = reactive({
      icon: "/src/assets/icon.png",
      name: "手机用户6278",
      time: "2022-03-17 15:47:32",
      logo: "/src/assets/smile.png",
      mark: "5.0分 超满意",
      evaluate: "[默认好评] 通过平台担保交易买到一致英短纯白",
    });

    return {
      comment,
    };
  },
};
</script>

<style lang="scss" scoped>
.comment {
  border-radius: 20px;
  background-color: #fff;
  padding: 15px;
  margin: 10px 15px;

  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title-1 {
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 2px;
    }
    .title-2 {
      font-size: 12px;
      letter-spacing: 1px;
    }
  }
  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;

    > img {
      width: 50px;
      height: 50px;
      margin-right: 5px;
      margin-left: 0;
    }

    .main-text {
      display: flex;
      flex-direction: column;

      > div {
        margin: 3px 0;
      }

      .msg {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .name {
          font-size: 14px;
          letter-spacing: 1px;
        }
        .time {
          font-size: 12px;
        }
      }
      .mark {
        background-color: rgba(233, 181, 13, 0.5);
        padding: 5px 5px 5px 0;
        border-radius: 20px;

        font-size: 12px;

        > img {
          vertical-align: middle;
          padding-bottom: 2.5px;
        }
      }
      .evaluate {
        font-size: 13px;
      }
    }
  }
}
</style>