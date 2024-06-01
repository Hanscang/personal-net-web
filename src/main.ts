import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import router from './router/router'
import NetHome from '@/views/NetHome.vue'

const app = createApp(NetHome)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
