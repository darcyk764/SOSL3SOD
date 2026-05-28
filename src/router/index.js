import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ContactPage from '../views/ContactPage.vue'
import AboutPage from '../views/AboutPage.vue'
import DestinationPage from '../views/DestinationPage.vue'
import ServicesPage from '../views/ServicesPage.vue'
import ImagePage from '../views/ImagePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/destinations', name: 'Destinations', component: DestinationPage },
  { path: '/services', name: 'Services', component: ServicesPage },
  { path: '/gallery', name: 'Gallery', component: ImagePage },
  { path: '/contact', name: 'Contact', component: ContactPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
