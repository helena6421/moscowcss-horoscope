import { createApp } from 'vue'
import router from './app/router'
import App from './App.vue'
import './styles/global.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
