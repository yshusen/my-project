<template>
  <div class="ech">
    <div id="histogram" style="width:500px;height:500px" ref="chart"></div>
    <div id="main" style="width: 500px;height:500px;"></div>
  </div>
</template>

<script>
  const echarts = require('echarts');
  export default {
    name: "Option4",
    data() {
      return {};
    },
    methods: {
      initCharts() {
        let myChart = echarts.init(this.$refs.chart);
// 绘制图表
        myChart.setOption({
          title: {text: '在Vue中使用echarts'},
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [7, 23, 36, 16, 9, 18]
          }]
        });
      },
      pieChart() {
        let pieChart = this.$echarts.init(document.getElementById('main'));
        pieChart.setOption({
          title: {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      }
    },
    mounted() {
      this.initCharts();
      this.pieChart();
    }
  }
</script>

<style scoped>
  .ech {
    float: left;
  }
  #histogram{
    float: left;
    margin-left: 50px;
  }
  #main{
    float: left;
    margin-left: 100px;
  }
</style>
