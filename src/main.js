import Buefy from 'buefy'
import Vue from 'vue'
import 'buefy/dist/buefy.css'
import VueScrollTo from 'vue-scrollto'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Buefy)
Vue.use(VueScrollTo)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
