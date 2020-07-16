// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/App'
import { router } from './_helpers'
import { store } from './_store';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueAWN from "vue-awesome-notifications"
require("vue-awesome-notifications/dist/styles/style.css")

Vue.config.productionTip = false

/* eslint-disable no-new */
let awnOptions = {
	position : 'top-left',
	maxNotifications: 1,
	durations : {
		global : 1000,
		alert : 2000
	}
}
Vue.use(VueAWN,awnOptions);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
