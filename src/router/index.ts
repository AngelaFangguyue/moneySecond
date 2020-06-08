import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Money from '@/views/Money.vue';
import Label from '@/views/Label.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
    {
      path: '/',
      name: 'Home',
     // component: Home  //重定向
      redirect: '/money'
    },
    {
      path: '/money',
      name: 'Money',
      component: Money
    },
    {
      path: '/label',
      name: 'Label',
      component: Label
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    },
    {
      path: '/*',
      name: 'notFound',
      component: NotFound
    }
]

const router = new VueRouter({
  routes
})

export default router
