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
    path: '/fin',
    name: 'Fin',
    component: () => import(/* webpackChunkName: "jeu" */ '../views/Fin.vue')
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
  //IMG J1
  {
    path: '/j1image1',
    name: 'J1Image1',
    component: () => import(/* webpackChunkName: "jeu" */ '../views/J1Image1.vue')
  },
  {
    path: '/j1image2',
    name: 'J1Image2',
    component: () => import(/* webpackChunkName: "jeu" */ '../views/J1Image2.vue')
  },
  {
    path: '/j1image3',
    name: 'J1Image3',
    component: () => import(/* webpackChunkName: "jeu" */ '../views/J1Image3.vue')
  },
  {
    path: '/j1image4',
    name: 'J1Image4',
    component: () => import(/* webpackChunkName: "jeu" */ '../views/J1Image4.vue')
  },
  //IMG J2
  {
    path: '/j2image1',
    name: 'J2Image1',
    component: () => import(/* webpackChunkName: "jeu" */ '../views/J2Image1.vue')
  },
  {
    path: '/j2image2',
    name: 'J2Image2',
    component: () => import(/* webpackChunkName: "jeu" */ '../views/J2Image2.vue')
  },
  {
    path: '/j2image3',
    name: 'J2Image3',
    component: () => import(/* webpackChunkName: "jeu" */ '../views/J2Image3.vue')
  },
  {
    path: '/j2image4',
    name: 'J2Image4',
    component: () => import(/* webpackChunkName: "jeu" */ '../views/J2Image4.vue')
  },
  {
    path: '/j2image5',
    name: 'J2Image5',
    component: () => import(/* webpackChunkName: "jeu" */ '../views/J2Image5.vue')
  },
  {
    path: '/j2image6',
    name: 'J2Image6',
    component: () => import(/* webpackChunkName: "jeu" */ '../views/J2Image6.vue')
  },
  {
    path: '/j2image7',
    name: 'J2Image7',
    component: () => import(/* webpackChunkName: "jeu" */ '../views/J2Image7.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
