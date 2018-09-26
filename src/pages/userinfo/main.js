import Vue from 'vue'
import App from './index'
import axios from 'axios'
const app = new Vue(App)

app.$mount()
Vue.prototype.$axios = axios
