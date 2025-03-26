<script setup lang="ts">
import { ref, onMounted } from "vue";
import Banner from "./banner/index.vue";
import Search from "./search/index.vue";
import Level from "./level/index.vue";
import Region from "./region/index.vue";
import Card from "./card/index.vue";
</script>

<template>
  <div>
    <!-- 轮播图区域 -->
    <Banner></Banner>

    <!-- 查询区域 -->
    <Search></Search>

    <!-- 医院结构区域 -->

    <el-row :gutter="20">
      <el-col :span="20">
        <div>
          <h1>医院</h1>
          <!-- 等级 -->
          <Level></Level>
          <!-- 地区 -->
          <Region></Region>
          <!-- 医院卡片 -->
          <div>
            <Card v-for="i in 10" :key="i"></Card>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div></div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
h1 {
  color: #7f7f7f;
  font-weight: 900;
  margin: 10px 0;
}
</style>
