<script setup lang="ts"></script>

<template>
  <div class="level">
    <div class="content">
      <div class="left">等级：</div>
      <ul class="hosptail">
        <li class="active">全部</li>
        <li>一级</li>
        <li v-for="i in 50" :key="i">二级</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.level {
  color: #7f7f7f;
  padding: 5px 0;

  .content {
    display: flex;

    .left {
      flex: none;
      width: 50px;
    }
    .hosptail {
      display: flex;
      flex-wrap: wrap;

      li {
        margin: 0 10px 10px 0;
        cursor: pointer;

        &.active {
          color: #409eff;
        }

        &:hover {
          color: #409eff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
