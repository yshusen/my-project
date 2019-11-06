<template>
  <div class="home">
    <Head/>
    <h1>新闻总览</h1><!--key="item.id"-->
    <div class="new_box" v-for="item of list">
      <div class="new_box_inner">
        <!--谁要变大写就把谁的后边加上  |upper    这里的upper就是自定义指令中的 ID-->
        <router-link :to="'/single/'+item.id">
          <h3 v-change-color:ita="{font :'24px'}">{{item.id}}.{{item.title | upper}}</h3>
        </router-link>
        <article>{{item.body}}</article>
      </div>
    </div>
    <el-button type="primary" plain @click="getMore" class="get_more">加载更多</el-button>
  </div>
</template>

<script>
  import Head from './../components/Head';

  export default {
    name: 'Home',
    components: {Head},
    data() {
      return {
        list: [],
        num: 0
      }
    },
    created() {
      this.$axios.get('./../../static/txt.json')
        .then((res) => {
          // console.log(res.data);
          this.list = res.data.slice(0, 10);
          this.$store.commit('initStoreList', res.data);
        }).catch(() => {
        this.$message({
          showClose: true,
          message: '哎呀！数据离家出走了(づ╥﹏╥)づ',
          type: 'error',
        })
      })
    },
    methods: {
      getMore() {
        if (this.num < 10) {
          this.$axios.get('./../../static/txt.json')
            .then((res) => {
              let data = res.data.slice(5 + this.num, 10 + this.num);
              this.list = this.list.concat(data);
            }).catch(() => {
            this.$message({
              showClose: true,
              message: '哎呀！数据离家出走了(づ╥﹏╥)づ',
              type: 'error',
            })
          });
          this.num += 5;
        } else {
          this.$message({
            showClose: true,
            center: true,
            message: '亲不要再点啦，没有更多了哦！',
            type: 'warning'
          });
        }
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    text-align: center;
  }

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

  .new_box {
    height: 100px;
    margin-bottom: 10px;
    background: #dddddd;
    text-align: center;
  }
  .new_box_inner{
    width: 80%;
    margin: 0 auto;

  }

  h3 {
    font-size: 22px;
    line-height: 50px;

  }

  article {
    line-height: 24px;
    text-align: left;
    text-indent: 2em;
  }

  .get_more {
    margin: 20px 0;
  }

  a {
    text-decoration: none;
  }
</style>
