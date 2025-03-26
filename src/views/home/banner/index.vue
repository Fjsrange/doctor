<script setup lang="ts"></script>

<template>
  <div>
    <el-carousel height="350px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="@/assets/banner/微信图片_20240511134943.jpg" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 100%;
  height: 350px;
}
</style>
