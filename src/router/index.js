import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ContactPage from '../views/ContactPage.vue'
import ImagePage from '../views/ImagePage.vue'
import AboutPage from '../views/AboutPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/image', name: 'Image', component: ImagePage },
  { path: '/about', name: 'About', component: AboutPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
