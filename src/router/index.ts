import { createRouter, createWebHistory } from 'vue-router'

// createRouter用于创建路由实例，可以管理多个路由
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/hospital',
      name: 'hospital',
      component: () => import('@/views/hospital/index.vue')
    },
    {
      path: '/',
      redirect: '/home'
    }
  ],
  // 滚动行为：当路由切换时，页面滚动到顶部
  scrollBehavior: () => ({
    top: 0,
    left: 0
  })
})

