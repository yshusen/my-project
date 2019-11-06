<template>
  <div>
    <div class="demo-type">
      <div class="userImg">
        <el-avatar src="http://www.agri35.com/UploadFiles/img_0_1930219534_3712760584_26.jpg"></el-avatar>
        <br>
        用户名：user
      </div>
      <div>
        年龄：18
      </div>
      <div>
        职位：总裁
      </div>
    </div>
    <div class="calendar">
      <el-calendar v-model="value"></el-calendar>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Option1",
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>

<style scoped>
  .demo-type {
    float: left;
    margin: 0 20px;
    width: 200px;
    border: 1px solid #cccccc;
    text-align: center;
  }

  .demo-type div {
    border-top: 1px solid #cccccc;
    line-height: 50px;
  }

  .demo-type .userImg {
    border: none;
  }

  .el-avatar {
    width: 150px;
    height: 150px;
  }

  .calendar {
    float: left;
    margin-left: 20px;
    width: 900px;
  }
</style>
