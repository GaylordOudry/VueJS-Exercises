import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routing from './Routing'

// Importation de boostrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Initialisation du router
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routing,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
