<script setup></script>

<template>
  <div class="top">
    <div class="content">
      <!-- 左侧 -->
      <div class="left">
        <img src="../../assets/vue.svg" alt="" />
        <p>尚医通 预约挂号统一平台</p>
      </div>
      <!-- 右侧 -->
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login">登录/注册</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top {
  position: fixed; // 固定定位
  z-index: 999; // 层级
  width: 100%;
  height: 70px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;

  .content {
    width: 1200px;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
        margin-left: 10px;
      }

      p {
        margin-left: 10px;
        font-size: 20px;
        font-weight: 500;
        color: #55a6fe;
      }
    }

    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      tab-size: 14px;
      color: #999;

      .help {
        margin-right: 10px;
      }
    }
  }
}
</style>
