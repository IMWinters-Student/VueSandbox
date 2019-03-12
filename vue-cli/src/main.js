import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './Routes.js';
import {store} from './Store/Store.js'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
