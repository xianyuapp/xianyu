/*
 * @Description: 
 * @Author: 张涛
 * @Date: 2019-11-09 10:36:30
 * @LastEditors: 张涛
 * @LastEditTime: 2019-11-12 15:26:51
 */
import Vue from 'vue'
import Router from 'vue-router'
import Fishponds from '@/pages/Fishponds'
import Lookingfish from '@/pages/Lookingfish'
import Myjoin from '@/pages/Myjoin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Fishponds',
      component: Fishponds
    },
    {
      path: '/Fishponds',
      name: 'Fishponds',
      component: Fishponds
    },
    {
      path: '/Lookingfish',
      name: 'Lookingfish',
      component: Lookingfish
    },
    {
      path: '/Myjoin',
      name: 'Myjoin',
      component: Myjoin
    }
  ]
})
