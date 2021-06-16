/*
 * @Date: 2021-06-15 02:46:22
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-16 16:53:05
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// import 'element-plus/packages/theme-chalk/src/base.scss'
const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')