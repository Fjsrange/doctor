<script setup lang="ts">
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

const state = ref("");
</script>

<template>
  <div class="search">
    <el-autocomplete
      v-model="state"
      clearable
      class="form"
      placeholder="请输入医院名称"
    />
    <el-button type="primary" :icon="Search">查询</el-button>
  </div>
</template>

<style scoped lang="scss">
// 深度选择器：原生、less、sass(scss)
// 深度选择器：>>>、/deep/、::v-deep
// 作用：在vue文件中，可以使用>>>或::v-deep来代替/deep/，实现深度选择器的效果
.search {
  width: 100%;
  height: 50px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  ::v-deep(.form) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>
