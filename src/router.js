import { createRouter, createWebHashHistory } from 'vue-router';

import BirdDetails from './pages/BirdDetail';
import Home from './pages/Home';

const routes = [
  {
    name: 'bird_details',
    path: '/bird-details/:id',
    component: BirdDetails,
    props: true,
  },
  {
    name: 'home',
    path: '/',
    component: Home,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
