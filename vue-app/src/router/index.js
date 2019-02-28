import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/app',
      name: 'Home',
      component: () => import('@/containers/DefaultContainer'),
      children: [
        {
          path: 'page1',
          component: () => import('@/pages/Page1'),
        },
        {
          path: 'page2',
          component: () => import('@/pages/Page2'),
        },
      ],
    },
  ],
});

export default router;
