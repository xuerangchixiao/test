import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from '@/view/Home.vue'
import Login from '@/view/Login.vue'

const routes: Array<RouteRecordRaw> = [
  
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]
//创建路由
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router