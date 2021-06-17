<!--
 * @Date: 2021-06-15 02:46:22
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-18 03:58:49
-->
<template>
  <div id="container">
    <!-- <el-button @click="addData">Test</el-button> -->
    <china-map :metaData="metaData" :plotOptions="plotOptions" />
  </div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>
<script>
// @ is an alias to /src
import ChinaMap from "@/components/ChinaMap.vue";

export default {
  name: "QuickView",
  components: {
    ChinaMap
  },
  data() {
    return {
      isCollapse: false,
      currentTitle: "疫情速览",
      metaData: null,
      plotOptions: null,
    };
  },
  methods: {
    addData() {
      this.metaData.push({ name: "广东省", value: 1 });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  created() {
    this.metaData = [
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
    ];
    this.plotOptions = {
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
          var value = (params.value + "").split(".");
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
          data: this.metaData,
        },
      ],
    };
    setTimeout(() => {
      this.$nextTick(() => {});
    }, 500);
  },
};
</script>
