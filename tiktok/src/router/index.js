import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    redirect: 'first', 
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      
      {
        path: '/first',
        name: 'first',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/FirstView.vue'),
    children:[
      {
        path: '/first',
        name: 'first',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/VideoView.vue')
      },
    ]
      },
      {
        path: '/friends',
        name: 'friends',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/FriendsView.vue')
        
      },
      {
        path: '/msg',
        name: 'msg',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route][] is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/MsgView.vue')
      },
      {
        path: '/me',
        name: 'me',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/MeView.vue')
      },
      {
        path: '/edit',
        name: 'edit',
        component:()=>import('../views/edit.vue')
       },
    ]
  },
  
      {
        path: '/publish',
        name: 'publish',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/PublishView.vue')
      }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
