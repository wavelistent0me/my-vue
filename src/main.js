import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/common.css'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

Vue.use(elementUi);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

router.beforeEach((to, from, next) => {
  //跳转页面需要权限
  if (to.meta.role) {
    //权限正确
    if (to.meta.role.indexOf(store.state.role) >= 0) {
      next();
    }
    //权限不符合
    else {
      next({path: "/login"});
    }
  }
  //跳转页面不需要权限
  else {
    next();
  }
});
