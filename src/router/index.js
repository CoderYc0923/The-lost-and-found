import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/detail',
        name:'Detail',
        component: () => import(/* webpackChunkName: "detail" */ '../views/conponents/Detail.vue'),
        
      },
      {
        path: '/announcement',
        name:'Announcement',
        component: () => import(/* webpackChunkName: "detail" */ '../views/conponents/Announcement.vue'),
       
      },
      {
        path: '/search',
        name:'Search',
        component: () => import(/* webpackChunkName: "detail" */ '../views/conponents/Search.vue'),
      },
      {
        path: '/release',
        name:'Release',
        component: () => import(/* webpackChunkName: "detail" */ '../views/conponents/Release.vue'),
        
      },
      {
        path: '/user',
        name:'User',
        component: () => import(/* webpackChunkName: "detail" */ '../views/conponents/User.vue'),
        
      },
    ]
  },
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
