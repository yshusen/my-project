<template>
  <div>
<!--待办事-->
  <div class="todo">
    <el-transfer
      v-model="value"
      :data="data"
      :titles="['待办事项', '完成事项']">
    </el-transfer>
  </div>
  <!--待办事结束-->
<!--图片欣赏-->
  <div class="pic">
    <el-row>
      <el-col :span="4" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://img.gmz88.com/uploadimg/image/20180814/20180814094537_14878.jpg" class="image">
          <div style="padding: 14px;">
            <span>皮皮的蟹老板</span>
            <div class="bottom clearfix">
              <time class="time">{{String(currentDate).slice(0,28)}}</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <!--图片欣赏结束-->
<!--折叠面板-->
    <div class="zd">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="一致性 Consistency" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
      <el-collapse-item title="可控 Controllability" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>
  </div>
<!--折叠面板结束-->
  </div>
</template>

<script>
  export default {
    name: "Option2",
    data() {
      const generateData = _ => {
        const list=['吃饭饭','睡觉觉','打豆豆','读书书','敲代码','聊天天'];
        const data = [];
        for (let i = 0; i < list.length; i++) {
          data.push({
            key: i,
            label: `${list[i]}`,
            disabled: false
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [],
        currentDate: new Date().getFullYear()+'年'+new Date().getMonth()+'月'+new Date().getDate()+'日'+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds(),
        /*activeNames属性是默认展开显示第几个  数组中存放的是name的值*/
        // activeNames: ['3']
        activeNames: []
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>

<style scoped>
/*待办事样式*/

 .todo{
   float: left;
   margin-left: 20px;
 }
/*待办事样式结束*/
/*图片欣赏样式*/
.el-col{
  margin-left: 100px;
}
.el-row{
  pointer-events: none;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.image {
  width: 100%;
  display: block;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
/*图片欣赏样式结束*/
/*折叠面板样式*/
.zd{
  /*float: right;*/
  margin: 0 auto;
  width: 1200px;
}
/*折叠面板样式结束*/
</style>
