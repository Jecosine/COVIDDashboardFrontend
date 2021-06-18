<!--
 * @Date: 2021-06-18 02:09:51
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-18 08:53:37
-->
<template>
  <div id="mix-container"></div>
</template>

<script lang="ts">
import * as echarts from "echarts";
import Request from "@/http/index";

export default {
  name: "MixCharts",

  components: {
    // ChinaMap,
  },
  data() {
    return {
      isLoaded: true,
      isCollapse: false,
      currentTitle: "疫情速览",
      confirmed: [],
      deaths: [],
      xAxis: [],
      recovered: [],
      myOption: {
        legend: {
          data: ["confirmed", "deaths", "recovered"],
        },
        toolbox: {
          // y: 'bottom',
          feature: {
            magicType: {
              type: ["stack", "tiled"],
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2,
            },
          },
        },
        xAxis: {
          data: null,
          splitLine: {
            show: false,
          },
        },
        yAxis: {},
        tooltip: {},
        series: [
          {
            name: "confirmed",
            type: "bar",
            data: null,
            itemStyle: {
              color: "#a71c64",
            },
            showBackground: true,
            emphasis: {
              focus: "series",
            },
            animationDelay: function(idx) {
              return idx * 10;
            },
          },
          {
            name: "deaths",
            type: "bar",
            data: null,
            itemStyle: {
              color: "#003a52",
            },
            showBackground: true,
            emphasis: {
              focus: "series",
            },
            animationDelay: function(idx) {
              return idx * 10;
            },
          },
          {
            name: "recovered",
            type: "bar",
            data: null,
            itemStyle: {
              color: "#75c6e9",
            },
            showBackground: true,
            emphasis: {
              focus: "series",
            },
            animationDelay: function(idx) {
              return idx * 10;
            },
          },
          {
            name: "confirmed_line",
            type: "line",
            smooth: true,
            data: null,
            itemStyle: {
              color: "#a71c64",
            },
            showBackground: true,
            emphasis: {
              focus: "series",
            },
            animationDelay: function(idx) {
              return idx * 10;
            },
          },
          {
            name: "deaths",
            type: "line",
            smooth: true,
            data: null,
            itemStyle: {
              color: "#003a52",
            },
            showBackground: true,
            emphasis: {
              focus: "series",
            },
            animationDelay: function(idx) {
              return idx * 10;
            },
          },
          {
            name: "recovered",
            type: "line",
            smooth: true,
            data: null,
            itemStyle: {
              color: "#75c6e9",
            },
            showBackground: true,
            emphasis: {
              focus: "series",
            },
            animationDelay: function(idx) {
              return idx * 10;
            },
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
      Request.get("/countryAgg/covid?Country=China&_limit=100")
        .then((res) => {
          res = res.data;
          // console.log(res);

          for (let i in res) {
            console.log(res[i]);

            that.xAxis.push(res[i].Date);
            that.deaths.push(res[i].Deaths);
            that.confirmed.push(res[i].Confirmed);
            that.recovered.push(res[i].Recovered);
          }
        })
        .then(() => {
          console.log(this.confirmed);
          const ele = document.getElementById("mix-container");
          this.charts = echarts.init(ele);
          this.myOption.series[3].data = this.myOption.series[0].data = this.confirmed;
          this.myOption.series[4].data = this.myOption.series[1].data = this.deaths;
          this.myOption.series[5].data = this.myOption.series[2].data = this.recovered;
          this.myOption.xAxis.data = this.xAxis;
          this.charts.setOption(this.myOption);
        });
    },
  },
  mounted() {
    this.fetchData();
  },
  created() {},
};
</script>
<style lang="css" scoped>
#mix-container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
