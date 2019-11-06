// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/store'
import echarts from 'echarts'

import changeColor from './directive/changeColor'
import upper from './directive/filters'

Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

//路由守卫
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if(JSON.parse(localStorage.getItem('islogin'))){ //判断本地是否存在access_token
      next();
    }else {
      alert('警告！请您登录后访问！');
      next({
        path:'/login'
      })
    }
  }
  else {
    next();
  }
  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
  if(to.fullPath == "/login"){
    if(JSON.parse(localStorage.getItem('islogin'))){
      next({
        path:from.fullPath
      });
    }else {
      next();
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
