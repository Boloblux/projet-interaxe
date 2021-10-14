import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Qr from '@/views/Qr.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/boutique',
    name: 'Boutique',
    component: () => import(/* webpackChunkName: "about" */ '../views/Boutique.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/jeu',
    name: 'Jeu',
    component: () => import(/* webpackChunkName: "jeu" */ '../views/Jeu.vue')
  },
  {
    path: '/qr',
    name: 'Qr',
    component: Qr,
  },
  {
    path: '/choixjoueur',
    name: 'Choixjoueur',
    component: () => import(/* webpackChunkName: "jeu" */ '../views/Choixjoueur.vue')
  },
  {
    path: '/script',
    name: 'Script',
    component: () => import(/* webpackChunkName: "jeu" */ '../views/Script.vue')
  },
  {
    path: '/jeuj1',
    name: 'JeuJ1',
    component: () => import(/* webpackChunkName: "jeu" */ '../views/JeuJ1.vue')
  },
  {
    path: '/jeuj2',
    name: 'JeuJ2',
    component: () => import(/* webpackChunkName: "jeu" */ '../views/JeuJ2.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
