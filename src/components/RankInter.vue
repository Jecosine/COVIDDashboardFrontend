<!--
 * @Date: 2021-06-18 02:09:51
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-18 10:23:03
-->
<template>
  <div id="container">
    <div id="mix-container"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import Request from "@/http/index";
export default {
  name: "RankInter",
  components: {
    // ChinaMap,
  },
  data() {
    return {
      isCollapse: false,
      currentTitle: "排名",
      confirmed: [],
      deaths: [],
      xAxis: [],
      yAxis: [],
      recovered: [],
      firstTime: true,
      myOption: {
        title: {
          // text: "世界人口总量",
          // subtext: "数据来自网络",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["Today"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: [], // country
        },
        series: [
          {
            name: "confirmed",
            type: "bar",
            data: [], // confirmed data
          },
          {
            name: "deaths",
            type: "bar",
            data: [], // confirmed data
          },
          {
            name: "recovered",
            type: "bar",
            data: [], // confirmed data
          },
        ],
      },
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    fetchData() {
      const that = this;
      Request.get(
        `/countryAgg/covid?Date=2021-04-05&_sort=Confirmed&_limit=10`
      )
        .then((res) => {
          res = res.data;
          // console.log(res);
          for (let i in res) {
            console.log(res[i]);
            if (that.firstTime) {
              that.yAxis.push(res[i].Country);
            }
            that.deaths.push(res[i].Deaths);
            that.confirmed.push(res[i].Confirmed);
            that.recovered.push(res[i].Recovered);
          }
        })
        .then(() => {
          console.log(this.confirmed);
          if (this.firstTime) {
            const ele = document.getElementById("mix-container");
            this.charts = echarts.init(ele);
          }
          this.myOption.series[0].data = this.confirmed;
          this.myOption.series[1].data = this.deaths;
          this.myOption.series[2].data = this.recovered;
          this.myOption.yAxis.data = this.yAxis;
          this.charts.setOption(this.myOption);
          this.firstTime = false;
        });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
<style lang="css" scoped>
#container {
  height: 80vh;
}
#mix-container {
  position: relative;
  width: 100%;
  height: 70vh;
}
#select-container {
  display: flex;
}
</style>
