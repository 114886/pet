<template>
  <div class="business">
    <div class="business-detail">
      <span class="text-1">商家信息</span>
      <span class="text-2">店铺 ></span>
    </div>
    <div class="business-logo">
      <div class="first">
        <img :src="business.icon" class="icon" alt="" />
        <div class="seller">
          <div class="seller-name">{{ business.name }}</div>
          <div class="seller-address">{{ business.address }}</div>
          <div class="seller-state">
            <span>
              在售 <span class="basic">{{ business.onSale }}</span
              >只
            </span>
            <span>
              好评<span class="basic">{{ business.praise }}</span
              >条
            </span>
            <span>
              等级<span class="basic">{{ business.level }}</span
              >星
            </span>
          </div>
        </div>
      </div>
      <div class="second">
        <span>{{ business.onSale }}</span>
        <span>在售宠物</span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const business = reactive({
      icon: "/src/views/message/img/example.png",
      name: "🏆宠物驿站给💯终身善后",
      address: "北京 石景山区",
      onSale: 755,
      praise: 54,
      level: 5,
    });

    return {
      business,
    };
  },
};
</script>

<style lang="scss" scoped>
.business {
  border-radius: 20px;
  background-color: #fff;
  padding: 15px;
  margin: 10px 15px;

  display: flex;
  flex-direction: column;

  .business-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text-1 {
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 2px;
    }
    .text-2 {
      font-size: 10px;
      letter-spacing: 1px;
    }
  }
  .business-logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    .first {
      display: flex;
      align-items: center;

      .icon {
        width: 45px;
        height: 45px;
        border-radius: 20px;
      }
      .seller {
        margin-left: 10px;

        div {
          margin: 5px 0;
        }
        .seller-name {
          font-size: 13px;
          letter-spacing: 1px;
        }
        .seller-address {
          font-size: 10px;
        }
        .seller-state {
          font-size: 10px;
          color: #aaa;

          .basic {
            color: red;
          }

          span {
            padding: 0 5px;
            border-right: 1px solid #aaa;
            &:first-of-type {
              padding-left: 0;
            }
            &:last-of-type {
              padding-right: 0;
              border: 0;
            }
          }
        }
      }
    }
    .second {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background-color: #eee;
      width: 70px;
      height: 70px;
      margin-left: 8px;

      :first-of-type {
        color: red;
      }
      :last-of-type {
        margin-top: 5px;
        font-size: 10px;
      }
    }
  }
}
</style>