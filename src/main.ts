import '@/assets/styles/index.scss';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'uno.css';


const app = createApp(App)

app.use(createPinia()).use(router)

app.mount('#app')
