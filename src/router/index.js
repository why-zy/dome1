import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Zhong from '@/components/Zhong'
import Next from '@/components/Next'
import Mack from '@/components/Mack'

Vue.use(Router)

export default new Router({
  routes: [
    {
      base: './',
      path: '/',
      name:
        'HelloWorld',

      component: {
        HelloWorld,
        Zhong,
        Next,
        Mack
      }
    }
  ]
})
