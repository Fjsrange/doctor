<script setup></script>

<template>
  <div class="bottom">
    <div class="content">
      <div class="left">京ICP备 2021000000号 电话挂号 010-00000000</div>
      <div class="right">
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bottom {
  width: 100%;
  height: 50px;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #000;

    .right {
      span {
        margin: 0 10px;
      }
    }
  }
}
</style>
