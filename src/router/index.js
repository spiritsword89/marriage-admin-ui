import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/App.vue'
import About from '../views/Login.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router