import '@gouvfr/dsfr/dist/dsfr.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons.min.css' // Facultatif : Si des icônes sont utilisées avec <span class="fr-icon-..." />
import '@gouvminint/vue-dsfr/styles' // Import des styles globaux
import 'uno.css'
import '@/main.css'

import axios from 'axios'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueDsfr from '@gouvminint/vue-dsfr' // Import (par défaut) de la bibliothèque

import * as icons from './icons'
import App from './App.vue'
import router from '@/router/index'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle'
// register Swiper custom elements
register()

const pinia = createPinia()

// the FastAPI backend
axios.defaults.baseURL = '/api/'

const app = createApp(App)

app
  .use(pinia)
  .use(VueDsfr, { icons: Object.values(icons) })
  .use(router)
  .mount('#app')