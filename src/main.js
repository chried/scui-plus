import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import scui from './scui'
import i18n from './locales'
import router from './router'
import App from './App.vue'

import {createPinia} from "pinia";

const pinia = createPinia()
const app = createApp(App);

app.use(pinia);

app.use(router);
app.use(ElementPlus);
app.use(i18n);
app.use(scui);
//挂载app
app.mount('#app');
