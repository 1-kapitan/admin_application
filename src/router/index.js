import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Accounts from '../views/dashboard/Accounts.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import AccountSettings from '../views/accountSettings/AccountSettings.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
 
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard 
  },
  {
    path: '/accounts',
    name: 'accounts',
    component: Accounts 
  },

  {
    path: '/transactions',
    name: 'transactions',
    component: null 
  },

  {
    path: '/tribes',
    name: 'tribes',
    component: null
  },

  {
    path: '/cards',
    name: 'cards',
    component: null 
  },

  {
    path: '/wallets',
    name: 'wallets',
    component: null 
  },
  {
    path: '/learning-center',
    name: 'learning-center',
    component: null 
  },
  {
    path: '/reports',
    name: 'reports',
    component: null 
  },
  {
    path: '/settings',
    name: 'settings',
    component: null 
  },

  {
    path: '/accounts/personal-information',
    name: 'personal-infomation',
    component: AccountSettings 
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
