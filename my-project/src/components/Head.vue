<template>
    <header>
      <nav>
        <span class="logo">新闻管理系统</span>
        <div>
          <router-link to="/">首页</router-link>
          <router-link to="/list">列表</router-link>
          <router-link to="/shop">购物</router-link>
          <router-link to="/comand">管理</router-link>
        </div>
        <span class="exit">欢迎登陆：
          <i class="el-icon-user-solid"></i>{{this.username}}
          <a href="/address"><i class="el-icon-map-location"></i>位置</a>
          <a href="/login" @click="exit">退出登陆</a>
        </span>
      </nav>
    </header>
</template>

<script>
    export default {
        name: "Head",
      data(){
          return{
            username:localStorage.getItem('user')
          }
      },
      methods:{
          exit(){
            localStorage.clear();
            // localStorage.removeItem('user');
            let flag = false;
	          this.$store.commit('login',flag);
            this.$router.push("/login");
            console.log("退出登录");
          }
      }
    }
</script>

<style scoped>
  header{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #333333;
    margin-bottom: 10px;
  }
  nav{
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
  }
  nav .logo{
    display: inline-block;
    float: left;
    color: #ffffff;
    font-size: 25px;
    font-weight: bold;
    margin-right: 100px;
  }
  div a{
    display: inline-block;
    float: left;
    width: 60px;
    height: 40px;
    font-size: 16px;
    /*padding: 8px 15px;*/
    color: #ffffff;
    text-decoration: none;
    background: #333333;
    /*margin-left: 10px;*/
  }
  nav .exit{
    display: inline-block;
    float: right;
    font-size: 13px;
    color: #ffffff;
  }
  nav .exit a{
    float: right;
    font-size: 13px;
    color: #ffffff;
    margin-left: 20px;
  }

  /*.router-link-exact-active 修改*/
  .router-link-exact-active{
    background: #cccccc;
  }
</style>
