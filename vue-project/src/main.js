// main.js 或者 main.ts
import { createApp } from 'vue';
import App from './App.vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import 'amfe-flexible';
import router from './router/index';

const app = createApp(App);
app.use(Vant);

app.use(router);
app.mount('#app');