import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/Money.vue';
import Label from '@/views/Label.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [

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
      path: '/label/:id',
      name: 'EditLabel',
      component: EditLabel
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
