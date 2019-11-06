import Vue from 'vue'
import Router from 'vue-router'

//路由懒加载
const Home = ()=>import('@/components/Home');
const List = ()=>import('@/components/List');
const Shop = ()=>import('@/components/Shop');
const Comand = ()=>import('@/components/Comand');
// const Option1 = ()=>import('@/components/comand/Option1');
// const Option2 = ()=>import('@/components/comand/Option2');
// const Option3 = ()=>import('@/components/comand/Option3');
// const Option4 = ()=>import('@/components/comand/Option4');
const Single = ()=>import('@/components/Single');
const Login = ()=>import('@/components/Login');
const Registered = ()=>import('@/components/Registered');
const Address = ()=>import('@/components/Address');
const Notfound = ()=>import('@/components/Notfound');

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        keepAlive:true,
        requireAuth:true
      }
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/comand',
      name: 'Comand',
      component: Comand,
      // redirect:'/comand/opt1',
      meta:{
        requireAuth:true
      },
      children:[
        // {path:'opt1',component:Option1},
        // {path:'opt2',component:Option2},
        // {path:'opt3',component:Option3},
        // {path:'opt4',component:Option4}
      ]
    },
    {
      path: '/single/:id',
      name: 'Single',
      component: Single,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Registered',
      component: Registered
    },
    {
      path: '/address',
      name: 'Address',
      component: Address,
      meta:{
        requireAuth:true
      }
    },


    //404页面，写在最后
    {
      path: '*',// * 用来匹配404页面使用
      name: 'Notfound',
      component: Notfound
    },
  ]
})
