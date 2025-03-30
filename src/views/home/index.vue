<script setup lang="ts">
import { ref, onMounted } from "vue";
import Banner from "./banner/index.vue";
import Search from "./search/index.vue";
import Level from "./level/index.vue";
import Region from "./region/index.vue";
import Card from "./card/index.vue";

const currentPage = ref<number>(1);
const pageSize = ref<number>(10);

// 每个页面展示的数量
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
// 选择页码
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
  currentPage.value = val;
};
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
          <div class="card-box">
            <Card class="card" v-for="i in 10" :key="i"></Card>
            <!-- 分页器 -->
            <el-pagination
              v-model:current-page="currentPage"
              v-model:page-size="pageSize"
              :page-sizes="[10, 20, 30, 50, 100]"
              :background="true"
              layout="total, sizes, prev, pager, next, jumper"
              :total="100"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
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

.card-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .card {
    width: 48%;
    margin: 10px 0;
  }
}
</style>
