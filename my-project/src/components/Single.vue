<template>
  <div>

    <template>
      <el-carousel :interval="4000" type="card" height="300px" style="width: 600px; margin:0 auto">
        <el-carousel-item>
          <img src="./../assets/single_demo_img/img1.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="./../assets/single_demo_img/img2.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="./../assets/single_demo_img/img3.jpg" alt="">
        </el-carousel-item>

        <el-carousel-item>
          <img src="./../assets/single_demo_img/img4.jpg" alt="">
        </el-carousel-item>
      </el-carousel>
    </template>

    <h1>详情信息</h1>
    <div class="single_box">
      <h3>{{this.message.title}}</h3>
      <article>{{this.message.body}}</article>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Single",
    data() {
      return {
        message: {},
        id: this.$route.params.id,
        list: []
      }
    },
    created() {
      this.$axios.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
        .then((res) => {
          // console.log(res.data);
          this.message = res.data;
          console.log(this.message);
        }).catch(() => {
        this.$message({
          showClose: true,
          message: '哎呀！数据离家出走了(づ╥﹏╥)づ',
          type: 'error',
        })
      })
    }
  }
</script>

<style scoped>
  h1 {
    height: 80px;
    background: #cccccc;
    width: 100%;
    line-height: 80px;
    color: #333;
    text-align: center;
    font-size: 36px;
    margin-bottom: 10px;
  }

  .single_box {
    width: 100%;
    background-color: #eeeeee;
  }

  .single_box h3 {
    margin: 10px 0;
    text-align: center;
    font-size: 30px;
  }

  .single_box article {
    padding: 20px 0;
    text-align: center;
  }
  .el-carousel__item {
    width: 300px;
    height: 300px;
  }

  .el-carousel__item img {
    width: 300px;
    height: 300px;
  }
</style>
