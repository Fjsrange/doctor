import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 引入清楚默认样式
import "@/style/reset.scss";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";

const app = createApp(App);

app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});

app.mount("#app");

// createApp(App).mount('#app')
