// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import routes from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)

const router = new VueRouter({
  routes
})

const store = new Vuex.Store({
  state: {
    count: 0,
    message: 'vuex message'
  },
  mutations: {
    increment (state) {
      state.count++
    },
    change (state) {
      state.message = 'mutations'
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
