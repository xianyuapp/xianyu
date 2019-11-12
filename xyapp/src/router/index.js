/*
 * @Author: 党婉珍
 * @Date: 2019-11-08 21:01:21
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-11-12 11:10:46
 * @Description: 
 */
import Vue from 'vue'
import Router
 from 'vue-router'
import MyPage from '@/pages/MyPage'
import MycollectionPage from '@/pages/MycollectionPage'
import MyInfosPage from '@/pages/MyInfosPage'
import EditMePage from '@/pages/EditMePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',        //path: '/Myinfos',   
      name: 'MyPage',
      component: MyPage,
      props:true
    },
    {
      path: '/MycollectionPage',
      name: 'MycollectionPage',
      component: MycollectionPage,
      props:true
    },
    {
      path: '/MyInfosPage',
      name: 'MyInfosPage',
      component: MyInfosPage,
      props:true
    },
    {
      path: '/EditMePage',
      name: 'EditMePage',
      component: EditMePage,
      props:true
    }

  ]
})
