import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Education from '../views/Education.vue'
import Activity from '../views/Activity.vue'
import Certificate from '../views/Certificate.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/edu',
      name: 'Education',
      component: Education
    },
    {
      path: '/ac',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/ce',
      name: 'Certificate',
      component: Certificate
    },
    {
      path: '/co',
      name: 'Contact',
      component: Contact
    },
  ]
})

export default router