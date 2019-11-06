import Vue from 'vue'

//在自定义指令 binding.arg，在指令插入时写入arg属性，可以在指令的函数中
// 进行判断操作，这样可以提高指令的复用率，公有的属性可以合写，
// 每个节点不相同的属性可以放在arg的判断中
const changeColor = Vue.directive('changeColor',function (el,binding) {
  // console.log(Math.random().toString(16));
  el.style.color = '#'+ Math.random().toString(16).slice(2,8);
  el.style.fontSize = binding.value.font;
  if(binding.arg ==='ita'){
    el.style.fontStyle = 'italic';
  }else if(binding.arg==='bold'){
    el.style.fontWeight = 'bold';
  }
});

export default changeColor;

// Vue.filter('upper',function (v) {
//   return v.toUpperCase();
// });
