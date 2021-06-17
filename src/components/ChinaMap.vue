import { defineComponent } from 'vue';
<!--
 * @Date: 2021-06-16 19:34:39
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-18 01:51:18
-->
<template>
  <div id="map-container">
    <div id="toolbox">
      <el-radio-group v-model="cate" style="margin-bottom: 20px;">
        <el-radio-button label="suspect">当日疑似</el-radio-button>
        <el-radio-button label="confirm">当日确诊</el-radio-button>
        <el-radio-button label="recover">当日治愈</el-radio-button>
      </el-radio-group>
      <div id="stat">
        <div class="stat-item confirm">
          <el-tag size="normal" type="error">确诊</el-tag>
          <span class="stat-text">10</span>
        </div>
        <div class="stat-item suspect">
          <el-tag size="normal" type="warning">疑似</el-tag>
          <span class="stat-text">10</span>
        </div>
        <div class="stat-item recover">
          <el-tag size="normal" type="success">治愈</el-tag>
          <span class="stat-text">10</span>
        </div>
      </div>
    </div>
    <div id="chartContainer" ref="chartContainer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { EChartsOption, EChartsType, GeoJSON } from "echarts";
import * as echarts from "echarts";
import { region } from "@/map/china";
export default defineComponent({
  props: {
    metaData: Object,
    plotOptions: Object,
  },
  data() {
    return {
      cate: "suspect",
      charts: {} as EChartsType,
    };
  },
  mounted() {
    const ele: HTMLElement = document.getElementById(
      "chartContainer"
    ) as HTMLElement;
    const tempOption = {
      visualMap: {
        left: "right",
        min: 0,
        max: 10,
        inRange: {
          color: ["#a5e7f0", "#59c4e6", "#8fd3e8", "#8a7ca8", "#516b91"],
        },
        text: ["High", "Low"], // 文本，默认为数值文本
        calculable: true,
      },
      tooltip: {
        trigger: "item",
        showDelay: 0,
        transitionDuration: 0.2,
        formatter: function(params) {
          var value:any = (params.value + "").split(".");
          value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,");
          return params.seriesName + "<br/>" + params.name + ": " + value;
        },
      },
      toolbox: {
        show: true,
        //orient: 'vertical',
        left: "left",
        top: "top",
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      series: [
        {
          name: "suspect",
          type: "map",
          map: "china",
          roam: true,
          emphasis: {
            label: {
              show: true,
            },
          },
          textFixed: {
            // Alaska: [20, -20]
          },
          data: [
            {
              name: "广东省",
              value: 1,
            },
            {
              name: "福建省",
              value: 6,
            },
            {
              name: "广西省",
              value: 1,
            },
            {
              name: "北京市",
              value: 4,
            },
            {
              name: "上海市",
              value: 3,
            },
            {
              name: "湖南省",
              value: 2,
            },
            {
              name: "湖北省",
              value: 7,
            },
          ],
        }
      ],
    };
    echarts.registerMap("china", region as GeoJSON);
    const charts: EChartsType = echarts.init(ele);
    charts.setOption(tempOption as EChartsOption);
    this.charts = charts;
    console.log(this.metaData, this.plotOptions);
  },
});
</script>
<style lang="css" scoped>
#map-container {
  position: relative;
  width: 100%;
  height: 100%;
}
#chartContainer {
  width: 100%;
  height: calc(100% - 4rem);
  /* min-width: 50vw;
  min-height: 40vw; */
  border: solid 1px rgba(0,0,0,0.1);
}
#toolbox {
  display: flex;
  flex-direction: row;
  height: 2.7rem;
  line-height: 2.7rem;
  margin-bottom: 20px;
  justify-content: space-between;
}
#stat {
  float: right;
  display: flex;
}
.stat-item {
  margin: 0 1rem;
}
.stat-text {
  font-weight: bolder;
  font-size: 1.2rem;
  margin-left: 0.4rem;
}
.confirm {
  color: #F56C6C;
}
.suspect {
  color: #E6A23C;
}
.recover {
  color: #67C23A;
}
</style>
