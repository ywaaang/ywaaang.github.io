import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import i18n from './locales'
import '@themesberg/flowbite';
import './styles/index.css';

createApp(App).use(router).use(i18n).mount('#app')
