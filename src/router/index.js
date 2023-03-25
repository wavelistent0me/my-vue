import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Echarts from "@/views/Echarts";
import Index from "@/views/Index";
import Pinchart from "@/views/Pinchart";
import Login from "@/views/Login";
import Map from "@/views/Map";
import Main from "@/views/Main";
import Animation from "@/views/Animation";
import BannerList from "@/views/BannerList";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {role: ["admin","editor"]},
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        meta: {role: ["admin"]},
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/About.vue')
        }
      },
      {
        path: '/echarts',
        name: 'Echarts',
        meta:{role: ["admin", "editor"]},
        component: Echarts
      },
      {
        path: '/index',
        name: 'Index',
        component: Index
      },
      {
        path: '/pinchart',
        name: 'Pinchart',
        component: Pinchart
      },
      {
        path: '/map',
        name: 'Map',
        component: Map
      },
      {
        path: '/animation',
        name: 'Animation',
        component: Animation
      },
      {
        path: '/bannerlist',
        name: 'BannerList',
        component: BannerList
      },
    ],
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
