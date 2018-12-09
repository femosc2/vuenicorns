import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"

Vue.use(VueResource)

Vue.http.options.root = "https://unicorns.idioti.se/"
Vue.http.options.headers = {"Accept": "application/json"}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
