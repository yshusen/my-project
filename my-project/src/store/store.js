//页面请求数据使用相同时，可以把数据写入到vex中 state中共同使用，减少htp请求

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    storeList:[1,2],
    //是否登录判断
    islogin:''
  },
  mutations:{
    initStoreList(state,list){
      // state.storeList = list;
      localStorage.setItem('list',JSON.stringify(list));
      state.storeList = JSON.parse(localStorage.getItem('list'));
    },
    login:(state,n) => {
      //传入登录状态islogin
      let islogin = JSON.parse(n);
      localStorage.setItem('islogin',JSON.stringify(islogin));
      console.log(islogin);
      state.islogin = islogin;
    }
  }
});
export default store;
