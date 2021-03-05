import Vue from 'vue';
import App from './App.vue';
import WebpPlugun from 'vue-webp-plugin';
Vue.use(WebpPlugun);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#root')
