import Vue from 'vue'

const uppers = Vue.filter('upper',function (v) {
  return v.toUpperCase();
});

export default uppers;
