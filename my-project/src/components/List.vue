<template>
  <div>
    <Head/>
    <!--内容-->
    <el-table :data="tableData" style="width: 100%;height: 450px;">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="body" label="内容"></el-table-column>
    </el-table>
    <!--分页器-->
    <el-pagination style="text-align: center;margin-top: 40px;"
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
  import Head from './../components/Head';

  export default {
    name: "List",
    components: {Head},
    data() {
      return {
        message: [],
        total: 1,//数据总量
        pageSize: 5,//每页显示的条目数
        currentPage: 1,//当前的页码数
      }
    },
    created() {
      /*this.$axios.get('./../../static/txt.json')
        .then((res) => {
          this.message = res.data;
          this.total = res.data.length;
        }).catch(() => {
        this.$message({
          showClose: true,
          message: '哎呀！数据离家出走了(づ╥﹏╥)づ',
          type: 'error',
        })
      })*/
      console.log(this.$store.state.storeList);
     // this.message = this.$store.state.storeList;
     // this.total = this.$store.state.storeList.length;

      this.message = JSON.parse(localStorage.getItem('list'));
      this.total = JSON.parse(localStorage.getItem('list')).length;
    },
    methods: {
      handleCurrentChange(val){
        this.currentPage=val;
      }
    },
    computed:{
      tableData(){
        return this.message.slice((this.currentPage-1)*
        this.pageSize,this.currentPage*this.pageSize)
      }
    }
  }
</script>

<style scoped>

</style>
