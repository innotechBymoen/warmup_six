import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import MobaPage from '@/views/MobaPage.vue';
import MmorpgPage from '@/views/MmorpgPage.vue';
import ShooterPage from '@/views/ShooterPage.vue';
import OtherPage from '@/views/OtherPage.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/moba',
    name: 'MobaPage',
    component: MobaPage
  },
  {
    path: '/mmo',
    name: 'MmorpgPage',
    component: MmorpgPage
  },
  {
    path: '/shooter',
    name: 'ShooterPage',
    component: ShooterPage
  },
  {
    path: '/other',
    name: 'OtherPage',
    component: OtherPage
  },
]

const router = new VueRouter({
  routes
})

export default router
