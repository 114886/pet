<template>
  <van-nav-bar title="客服官方" fixed />
  <div style="height: 46px"></div>
  <div>
    <div class="notice">
      <div class="main">常见问题</div>
      <div class="else">
        <div>
          1.新手不知如何开通店铺？<span><a href="#">点我了解开店流程></a></span>
        </div>
        <div>
          2.什么是担保交易？<span><a href="#">点我了解担保交易></a></span>
        </div>
        <div>
          3.更多问题请咨询客服(工作日9:00-18:00)
          其他时间请留言会尽快帮您处理，感谢支持!
        </div>
      </div>
    </div>
  </div>
  <div class="text">
    <div class="back">
      <input type="text" name="" id="" placeholder=" 想说点什么..." />
      <button class="send">发送</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  list-style: none;
  color: rgb(27, 123, 219);
}
.text {
  position: fixed;
  bottom: 0;
}
.back {
  background-color: rgba(238, 238, 238, 0.5);
  width: 100vw;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
}
.back > input {
  display: inline-block;
  width: 280px;
  border: 0;
  background-color: #fff;
  border-radius: 20px;
  margin: 5px 0px 5px 10px;
  text-indent: 1em;
}
input:focus {
  width: 280px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(1, 1, 1, 0.3);
}
.send {
  width: 80px;
  height: 30px;
  border-radius: 20px;
  border-color: transparent;
  background-color: #f5da81;
  margin: 5px 10px 5px 0px;

  overflow: scroll;
}

.notice {
  border-radius: 20px;
  background-color: #eee;
  padding: 15px 15px 10px 15px;
  margin: 15px;
}
.main {
  font-size: 15px;
  margin-bottom: 5px;
}
.else {
  font-size: 13px;
}
.else > div {
  margin-bottom: 10px;
}
.else > div:nth-last-child() {
  margin-bottom: 0;
}
</style>