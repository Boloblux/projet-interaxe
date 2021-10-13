import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/boutique',
    name: 'Boutique',
    component: () => import(/* webpackChunkName: "about" */ '../views/Boutique.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/jeu',
    name: 'Jeu',
    component: () => import(/* webpackChunkName: "about" */ '../views/Jeu.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
