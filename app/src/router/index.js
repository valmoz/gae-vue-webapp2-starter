import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import One from '@/components/One'
import Two from '@/components/Two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/one',
      name: 'One',
      component: One
    },
    {
      path: '/two',
      name: 'Two',
      component: Two
    }
  ]
})
