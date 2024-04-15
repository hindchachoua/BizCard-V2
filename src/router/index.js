import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/auth/login.vue'
import Register from '../components/auth/register.vue'
import HomeView from '../views/HomeView.vue'
import CardsView from '../views/Cards/View.vue'
import CardsCreate from '../views/Cards/Create.vue'
import CardsEdit from '../views/Cards/Edit.vue'
import { userAuthStore } from '@/stores/userAuthStore'


function checkIfUserIsLoggedIn(to, from, next) {
  const store = userAuthStore();
  console.log('checkIfUserIsLoggedIn called, current token:', store.currentToken);
  if (store.currentToken) {
      next();
  } else {
      next('/login');
  }
}

function checkIfUserIsNotLoggedIn(to, from, next) {
  const store = userAuthStore();
  console.log('checkIfUserIsNotLoggedIn called, current token:', store.currentToken);
  if (!store.currentToken) {
      next();
  } else {
      next('/');
  }
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: [checkIfUserIsLoggedIn]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: [checkIfUserIsNotLoggedIn]
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: [checkIfUserIsNotLoggedIn]
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/about',
      name: 'about',
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
