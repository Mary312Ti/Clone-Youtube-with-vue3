import { createRouter, createWebHistory } from 'vue-router';
import ChanelPage from '../pages/ChanelPage.vue'
import Home from '../pages/Home.vue'
import SignIn from '../pages/SignIn.vue'
import SignUp from '../pages/SignUp.vue'
import PlayingPage from '../pages/PlayingPage.vue'

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
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/play/:videoId',
    name: 'PlayingPage',
    component: PlayingPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;