import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cartelera from '../components/Cartelera.vue'
import Horarios from '../components/Horarios.vue'
import Comida from '../components/Comida.vue'
import Asiento from '../components/Asiento.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Cartelera
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },

  {
    path: '/cartelera',
    name: 'Cartelera',
    component: Cartelera
  },
  
  {
    path: '/horarios',
    name: 'Horarios',
    component: Horarios
  },

  {
    path: '/asiento',
    name: 'Asiento',
    component: Asiento
  },
  
  {
    path: '/Comida',
    name: 'Comida',
    component: Comida
  },
  
]

const router = new VueRouter({
  routes
})

export default router
