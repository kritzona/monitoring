import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/price-monitoring',
    name: 'price-monitoring',
    component: () => import('../views/PriceMonitoring.vue'),
  },
  {
    path: '/sales-volume-monitoring',
    name: 'sales-volume-monitoring',
    component: () => import('../views/SalesVolumeMonitoring.vue'),
  },
  {
    path: '/sales-volume-fns-monitoring',
    name: 'sales-volume-fns-monitoring',
    component: () => import('../views/SalesVolumeFnsMonitoring.vue'),
  },
  {
    path: '/leftovers-monitoring',
    name: 'leftovers-monitoring',
    component: () => import('../views/LeftoversMonitoring.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 200);
    });
  },
});

export default router;
