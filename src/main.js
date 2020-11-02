import Vue from 'vue'
import App from './App.vue'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题

import './assets/_reset.scss';
import './assets/base.js';

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'small'
});
let app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
if(process.env.NODE_ENV !== 'production') {
  window.app = app;
}
