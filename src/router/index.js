import { createRouter, createWebHistory } from 'vue-router'

function chekIfUserIsLoggedIn(user) 
{
  const store = userAuthStore()
  if(store.currentToken) return '/'
}
function chekIfUserIsNotLoggedIn(user) 
{
  const store = userAuthStore()
  if(!store.currentToken) return '/login'
}

import HomeView from '../views/HomeView.vue'
import CardsView from '../views/Cards/View.vue'
import CardsCreate from '../views/Cards/Create.vue'
import CardsEdit from '../views/Cards/Edit.vue'
import { userAuthStore } from '@/stores/userAuthStore'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: [chekIfUserIsNotLoggedIn]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      beforeEnter: [chekIfUserIsLoggedIn]
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      beforeEnter: [chekIfUserIsNotLoggedIn]
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Cards',
      name: 'Cards',
      component: CardsView
    },
    {
      path: '/Cards/create',
      name: 'CardsCreate',
      component: CardsCreate
    },
    {
      path: '/cards/:id/edit',
      name: 'CardsEdit',
      component: CardsEdit
    },
  ]
})

export default router
