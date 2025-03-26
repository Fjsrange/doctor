import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引入清楚默认样式
import '@/style/reset.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);

app.use(router);
app.use(ElementPlus)

app.mount('#app');


// createApp(App).mount('#app')
