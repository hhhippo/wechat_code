import Vue from 'vue'
import App from './App'
import '../static/style/weui.css'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
