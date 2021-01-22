<template>
  <div>
    <div
      ref="totalNumRef1"
      id="totalNumRefId"
      :style="{ width: '400px', height: '400px' }"
    />
  </div>
</template>


<script>
export default {
  data() {
    return {
      xList: [],
      yList1: [],
      yList2: [],
      yList3: [],
    };
  },
  created() {
    this.initData();
  },
  mounted() {},
  methods: {
    initData() {
      const _this = this;
      window.setInterval(function () {
        var randomNum = parseInt(Math.random() * 400);
        var randomNum2 = parseInt(Math.random() * 1000);
        var randomNum3 = parseInt(Math.random() * 2000);

        if (_this.xList.length > 10) {
          _this.xList.shift();
          _this.yList1.shift();
          _this.yList2.shift();
          _this.yList3.shift();

          // _this.xList.push(Date.parse(new Date()));
          _this.xList.push(new Date().toLocaleString());
          _this.yList1.push(randomNum);
          _this.yList2.push(randomNum2);
          _this.yList3.push(randomNum3);
        } else {
          // _this.xList.push(Date.parse(new Date()));
          _this.xList.push(new Date().toLocaleString());
          _this.yList1.push(randomNum);
          _this.yList2.push(randomNum2);
          _this.yList3.push(randomNum3);
        }

        _this.drawEcharts();
      }, 1000);
    },

    generateData() {},

    drawEcharts() {
      this.$echarts.init(this.$refs.totalNumRef1).setOption({
        title: {
          text: "折线图堆叠",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          //   data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          data: this.xList,
          boundaryGap: false,
          axisLabel: {
            rotate: 60,
          },
        },
        yAxis: {
          type: "value",
        },

        // x轴拖动
        dataZoom: [
          {
            type: "slider",
            realtime: true, //拖动滚动条时是否动态的更新图表数据
            height: 25, //滚动条高度
            // start: 40, //滚动条开始位置（共100等份）
            // end: 65, //结束位置（共100等份）
          },
        ],

        series: [
          {
            name: "邮件营销",
            // data: [820, 932, 901, 934, 1290, 1330, 1320],
            data: this.yList1,
            stack: "总量",
            type: "line",
            smooth: false,
          },
          {
            name: "联盟广告",
            // data: [820, 932, 901, 934, 1290, 1330, 1320],
            data: this.yList2,
            stack: "总量",
            type: "line",
            smooth: false,
          },
          {
            name: "视频广告",
            // data: [820, 932, 901, 934, 1290, 1330, 1320],
            data: this.yList3,
            stack: "总量",
            type: "line",
            smooth: false,
          },
        ],
      });

      // this.$echarts.init(this.$refs.totalNumRef1).on('click', params => {
      //   this.$router.push({
      //     path: '/learning/knowledge/learnKnowledge/content/' + this.ids[params.dataIndex]
      //   })
      // })
    },
    drawEcharts1() {
      this.$echarts.init(this.$refs.totalNumRef1).setOption({
        title: { text: "每个知识学习花费时间平均值", subtext: "知识-时间图" },
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow", // 默认为直线，可选为：line || shadow
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "超短波技术资料",
              "超短波控守",
              "超短波侦查",
              "短波测向",
              "短波侦查",
            ],
            // data: this.draw2Xdata,
            axisTick: {
              alignWithLabel: true,
            },
            axisLabel: {
              rotate: 60,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value}小时",
            },
          },
        ],
        series: [
          {
            name: "时长",
            type: "bar",
            barWidth: "60%",
            // data: [8, 9, 7, 2, 3],
            data: [
              { value: 8, id: "3ea054fe-9350-4bf0-9fcb-b5b90a91237c" },
              { value: 9, id: "ssssss" },
              { value: 7, id: "ssssss" },
              { value: 2, id: "ssssss" },
              { value: 3, id: "ssssss" },
            ],
            // data: this.draw2Ydata,
            itemStyle: {
              normal: {
                label: {
                  show: true, // 开始显示
                  position: "top",
                  textStyle: {
                    color: "black",
                    fontSize: 16,
                  },
                },
              },
            },
          },
        ],
      });

      // this.$echarts.init(this.$refs.totalNumRef1).on('click', params => {
      //   this.$router.push({
      //     path: '/learning/knowledge/learnKnowledge/content/' + this.ids[params.dataIndex]
      //   })
      // })
    },
  },
};
</script>