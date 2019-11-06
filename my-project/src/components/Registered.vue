<template>
  <div class='reg'>
    <div class="reg_inner">
      <h1>欢迎注册</h1>
      <el-form :model="reg" label-position="right">
        <el-form-item label="">
          <el-input v-model="reg.user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item v-if="visible" label="">
          <el-input type="password" v-model="reg.pass" placeholder="请输入密码">
            <i slot="suffix" title="显示密码" @click="changePass('show')" style="cursor:pointer;" class="el-icon-turn-off"></i>
          </el-input>
        </el-form-item>
        <el-form-item v-else label="">
          <el-input type="text" v-model="reg.pass" placeholder="请输入密码">
            <i slot="suffix" title="隐藏密码" @click="changePass('hide')" style="cursor:pointer;"
               class="el-icon-open"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">注册</el-button>
          <el-button @click="resetFn">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
  export default {
    name: "Registered",
    data() {
      return {
        reg: {
          user: '',
          pass: ''
        },
        visible: true,
      }
    },
    methods: {
      changePass(value) {
        this.visible = !(value === 'show');
      },    //判断渲染，true:暗文显示，false:明文显示
      resetFn(){
        this.reg.user = null;
        this.reg.pass = null
      }
    }
  }
</script>

<style scoped>
  .reg_inner {
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
  .el-input{
    width: 80%;
  }
</style>
