<template>
  <div>
    <Head/>
    <div class="navs" style="float: left;">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
               :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item index="1-1" @click="tabChange(child1)">选项1</el-menu-item>
          <el-menu-item index="1-2" @click="tabChange(child2)">选项2</el-menu-item>
          <el-menu-item index="1-3" @click="tabChange(child3)">选项3</el-menu-item>
          <el-menu-item index="1-4" @click="tabChange(child4)">选项4</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="options" :is="currentView"></div>
  </div>

</template>

<script>
  import Head from './../components/Head';
  import Option1 from './comand/Option1';
  import Option2 from './comand/Option2';
  import Option3 from './comand/Option3';
  import Option4 from './comand/Option4';

  export default {
    name: "Comand",
    components: {Head, Option1, Option2, Option3, Option4},
    data() {
      return {
        isCollapse: true,
        child1: 'Option1',
        child2: 'Option2',
        child3: 'Option3',
        child4: 'Option4',
        currentView: 'Option1' // 默认选中第一项
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      tabChange(tabItem) {
        this.currentView = tabItem;
      }
    }
  }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .options {
    /*float: right;*/
  }
</style>
