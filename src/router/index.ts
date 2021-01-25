import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import menus from './menus';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: menus[0].path,
  },
  ...menus,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
