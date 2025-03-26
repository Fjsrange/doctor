<script setup lang="ts"></script>

<template>
  <div class="level">
    <div class="content">
      <div class="left">地区：</div>
      <ul class="hosptail">
        <li class="active">全部</li>
        <li>昌平区</li>
        <li>海淀区</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.level {
  color: #7f7f7f;

  .content {
    display: flex;
    padding: 5px 0;

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
