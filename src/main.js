import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import App from './App'
import ProgressBar from './components/ProgressBar'
import storeConfig from './store/store-config'
import routerConfig from './router/router-config'
import { titleMixin } from './util/mixins'
import { host, timeAgo } from './util/filters'

Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store(storeConfig)
const router = new VueRouter(routerConfig)
sync(store, router)

Vue.mixin(titleMixin)

Vue.filter('timeAgo', timeAgo)
Vue.filter('host', host)

Vue.config.productionTip = false

const bar = new Vue(ProgressBar).$mount()
Vue.prototype.$bar = bar
document.body.appendChild(bar.$el)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
