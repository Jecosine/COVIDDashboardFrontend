import { defineComponent } from 'vue';
<!--
 * @Date: 2021-06-16 19:34:39
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-18 04:13:28
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
    <el-row :gutter="20" id="container">
      <el-col :span="16">
        <!-- <el-button
          circle
          id="collapse-button"
          :icon="isCollapse ? 'el-icon-right' : 'el-icon-back'"
          @click="isCollapse = !isCollapse"
        ></el-button> -->
        <div id="chartContainer" ref="chartContainer"></div>
      </el-col>
      <el-col :span="8">
        <div id="datatable-container">
          <data-table :metaData="[]" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { EChartsOption, EChartsType, GeoJSON } from "echarts";
import * as echarts from "echarts";
import { region } from "@/map/china";
import DataTable from '@/components/Table.vue';
export default defineComponent({
  components: {
    DataTable
  },
  props: {
    metaData: Array,
    plotOptions: Object,
  },
  data() {
    return {
      isCollapse: false,
      cate: "suspect",
      charts: {} as EChartsType,
      myOption: null
    };
  },
  methods: {
    updateData(delta) {
      this.myOption.series[0].data = delta
      this.charts.setOption(this.myOption)
    }
  },
  mounted() {
    // const that = this
    const ele: HTMLElement = document.getElementById(
      "chartContainer"
    ) as HTMLElement;
    echarts.registerMap("china", region as GeoJSON);
    const charts: EChartsType = echarts.init(ele);
    this.charts = charts;
    this.myOption = this.plotOptions
    this.charts.setOption(this.myOption as EChartsOption);
  },
  watch: {
  }
});
</script>
<style lang="css" scoped>
#map-container {
  position: relative;
  width: 100%;
  height: 100%;
}

#container {
  height: calc(100% - 3rem);
  width: 100%;
}
#chartContainer {
  width: 100%;
  height: calc(100% - 4rem);
  /* min-width: 50vw;
  min-height: 40vw; */
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
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
  color: #f56c6c;
}
.suspect {
  color: #e6a23c;
}
.recover {
  color: #67c23a;
}
#collapse-button {
  position: absolute;
  right: 1rem;
  z-index: 65530;
}
#datatable-container {
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
}
</style>
