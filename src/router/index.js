import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import MemberMain from '../views/Members/MemberMain.vue'
import MemberDetail from '../views/Members/MemberDetail.vue'
import FeatureManager from '../views/Functions/FeatureManage.vue'
import HobbyManager from '../views/Functions/HobbyManage.vue'

const routes = [
  { path: '/', 
    component: Home,
    children: [
      {
        path: '/',
        name: 'member-list',
        component: MemberMain
      },
      
      {
        path: '/member/detail',
        name: 'member-detail',
        component: MemberDetail
      },

      {
        path: '/functions/feature',
        name: 'feature-manage',
        component: FeatureManager
      },

      {
        path: '/functions/hobby',
        name: 'hobby-manage',
        component: HobbyManager
      },
    ]

  },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router