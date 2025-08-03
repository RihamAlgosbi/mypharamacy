import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // هذا السطر يستورد ملف الروتر

createApp(App).use(router).mount('#app') // هذا السطر يخبر Vue باستخدام الروتر