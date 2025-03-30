<script setup lang="ts">
import { ref, onMounted } from "vue";
import Header from "@/components/hospital_top/index.vue";
import Footer from "@/components/hospital_bottom/index.vue";
import request from "@/utils/requests.ts";

onMounted(() => {
  // let res = await request.get("/hosp/hospital/1/10");
  // console.log("res", res);
  request.get("/hosp/hospital/1/10").then((res) => {
    console.log("res", res);
  });
});
</script>

<template>
  <div class="container">
    <Header></Header>

    <div class="content">
      <router-view></router-view>
    </div>

    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    margin-top: 70px;
    width: 1200px;
    /* background-color: #f0f0f0; */
    min-height: calc(100vh - 70px);
  }

  .footer {
    width: 100%;
    height: 50px;
    background-color: #f0f0f0;
  }
}
</style>
