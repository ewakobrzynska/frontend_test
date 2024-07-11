import { createApp } from 'vue';
import App from './App.vue';
import EventBus from '@/EventBus';

const app = createApp(App);

app.config.globalProperties.$bus = EventBus;

app.mount('#app');