import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/router.routes';
import './assets/css/style.css';
import 'flowbite';

createApp(App)
.use(router)
.mount('#app')
