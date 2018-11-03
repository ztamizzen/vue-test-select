import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import SvgIcon from '@/components/SvgIcon.vue';

Vue.component('svg-icon', SvgIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');