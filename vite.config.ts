import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入node提供的内置模块path：可以获取绝对路径
// 安装：npm install @types/node -D
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: { api: 'modern-compiler' },
  //   }
  // }
})
