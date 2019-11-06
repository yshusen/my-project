<template>
  <div class="login">
    <div class="login_inner">
      <h1>请您登陆</h1>
      <el-input placeholder="请输入用户名" suffix-icon="el-icon-user-solid" v-model="user"></el-input>
      <!--<el-input placeholder="请输入密码" suffix-icon="el-icon-unlock" v-model="pass"></el-input>-->
      <!--显示隐藏密码-->
        <el-input v-if="visible" type="password" v-model="pass" placeholder="请输入密码">
          <i slot="suffix" title="显示密码" @click="changePass('show')" style="cursor:pointer;" class="el-icon-lock"></i>
        </el-input>
        <el-input  v-else type="text" v-model="pass" placeholder="请输入密码">
          <i slot="suffix" title="隐藏密码" @click="changePass('hide')" style="cursor:pointer;"
             class="el-icon-unlock"></i>
        </el-input>

      <br>
      <el-button type="primary" @click="submitFn">登录</el-button>
      <el-button @click="resetFn">重置</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        user: '',
        pass: '',
        visible: true,
      }
    },
    methods: {
      submitFn() {
        this.$axios.post('/api', {
          user: this.user,
          pass: this.pass
        }).then((res) => {
          if (res.data === 1) {
            localStorage.setItem("user", this.user);
            localStorage.setItem("pass", this.pass);
            let flag = true;
	          this.$store.commit('login', flag);
            this.$router.push("/");
            console.log("登录成功");
            this.$router.push('/')
          } else {
            this.$message({
              showClose: true,
              message: '错了哦，用户名或密码错啦(─.─|||',
              type: 'error'
            });
          }
        }).catch(() => {
          this.$message({
            showClose: true,
            message: '服务器宕机了<(－︿－)>',
            type: 'error'
          });
        })
      },
      changePass(value) {
        this.visible = !(value === 'show');
      },    //判断渲染，true:暗文显示，false:明文显示
      resetFn() {
        this.user = null;
        this.pass = null
      }
    }
  }
</script>

<style scoped>
  /*body{*/
  /*  background: url("./../assets/login_img/login_bg.jpg");*/
  /*}*/
  .login_inner {
    width: 500px;
    height: 300px;
    margin: 150px auto;
    border: 1px solid #cccccc;
    border-radius: 10px;
    text-align: center;
  }

  h1 {
    margin: 30px 0;
    font-size: 30px;
    line-height: 36px;
  }

  .el-input {
    width: 80%;
    margin-bottom: 30px;
  }
  .el-input i{
    display: inline-block;
    height: 100%;
    width: 25px;
    text-align: center;
    -webkit-transition: all .3s;
    transition: all .3s;
    line-height: 40px;
  }


</style>
