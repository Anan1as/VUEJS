import "@/assets/main.scss";

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from "@/router/movies.router"

createApp(App)
.use(createPinia())
.use(router)
.mount('#app')