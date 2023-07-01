import { createRouter, createWebHistory } from 'vue-router';
import ChanelPage from '../pages/ChanelPage.vue'
import Home from '../pages/Home.vue'
import SignIn from '../pages/SignIn.vue'

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
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;