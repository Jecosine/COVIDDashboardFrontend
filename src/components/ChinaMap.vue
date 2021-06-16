import { defineComponent } from 'vue';
<!--
 * @Date: 2021-06-16 19:34:39
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-16 20:41:02
-->
<template>
  <div id="chartContainer" ref="chartContainer"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { EChartsOption, EChartsType } from "echarts";
import * as echarts from 'echarts';
import {region} from '@/map/china';
export default defineComponent({
  props: {
    metaData: Object,
    plotOptions: Object,
  },
  data() {
    return {
      charts: {} as EChartsType
    };
  },
  mounted() {
    const ele: HTMLElement = document.getElementById(
      "chartContainer"
    ) as HTMLElement;
    const tempOption = {
      series: [
        {
          type: "map",
          map: "china",
        },
      ],
    };
    echarts.registerMap('china', region);
    const charts: EChartsType = echarts.init(ele);
    charts.setOption(tempOption as EChartsOption);
    this.charts = charts;
    console.log(this.metaData, this.plotOptions);
    
  },
});
</script>
<style lang="css" scoped>
#chartContainer {
  min-width: 50vw;
  min-height: 40vw;
}
</style>
