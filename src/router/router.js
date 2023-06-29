import { createRouter, createWebHistory } from 'vue-router';
import ChanelPage from '../pages/ChanelPage.vue'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/chanel',
    name: 'ChanelPage',
    component: ChanelPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;