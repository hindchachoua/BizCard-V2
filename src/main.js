import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'vue-toastification/dist/index.css'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .use(Toast)
    .mount('#app')
