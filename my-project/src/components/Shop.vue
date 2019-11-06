<template>
  <div>
    <Head/>
    <el-table :data="tableData" stripe style="width: 100%;" :cell-style="rowClass" :header-cell-style="headClass">
      <el-table-column prop="id" label="序号" width="180"></el-table-column>
      <el-table-column prop="brand" label="名称" width="180"></el-table-column>
      <el-table-column prop="src" label="图例">
        <template slot-scope="message">
          <img :src=message.row.src alt="">
        </template>
      </el-table-column>
      <el-table-column prop="single" label="型号"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="num" label="选取">
        <template slot-scope="message">
          <el-button @click="subtract(message)">-</el-button>
          <span>{{message.row.num}}</span>
          <el-button @click="add(message)">+</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="subtotal" label="小计">
        <template slot-scope="message">
          <span style="border: none">{{message.row.num*message.row.price}}</span>
        </template>
      </el-table-column>
    </el-table>
    <h2>总计：{{totalPrice()}}</h2>
  </div>
</template>

<script>
  import Head from './../components/Head';

  export default {
    name: "Shop",
    components: {Head},
    data() {
      return {
        message: [],

      }
    },
    methods: {
      // 表头样式设置
      headClass() {
        return 'text-align: center;background:#eef1f6;'
      },
      // 表格样式设置
      rowClass() {
        return 'text-align: center;'
      },
      //购买数量减
      subtract(message){
        message.row.num--;
        if(message.row.num<1){
          message.row.num=1;
          this.$message({
            message: '亲，不能再少了哦！',
            type: 'warning'
          });
        }
      },
      //购买数量加
      add(message){
        message.row.num++;
      },
      //总计
      totalPrice() {
        let totalP = 0;
        let len = this.message.length;
        for (let i = 0; i < len; i++) {
          totalP += this.message[i].price * this.message[i].num;
        }
        return totalP;
      },
    },
    created() {
      this.$axios.get('./../../static/shop.json')
        .then((res) => {
          // console.log(res);
          this.message = res.data;
        }).catch(() => {
        this.$message({
          showClose: true,
          message: '哎呀！数据离家出走了(づ╥﹏╥)づ',
          type: 'error',
        })
      });
      // console.log(this.$store.state.storeList);
    },
    computed: {
      tableData() {
        return this.message
      }
    }
  }
</script>

<style scoped>
  img {
    width: 75px;
    height: 75px;
  }

  h2 {
    float: right;
    margin: 40px 200px 200px;
    font-size: 30px;
  }

  span {
    display: inline-block;
    width: 100px;
    height: 37px;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    text-align: center;
    line-height: 36px;
    margin: 0 -5px;
  }
</style>
