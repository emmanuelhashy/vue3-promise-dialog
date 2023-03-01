import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as ModalDialogs from 'vue-modal-dialogs'

Vue.use(ElementUI);
Vue.use(ModalDialogs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
