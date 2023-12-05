import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'

import '@/styles/main.scss'

Vue.use(PiniaVuePlugin)

new Vue({
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
