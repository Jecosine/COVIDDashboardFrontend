<!--
 * @Date: 2021-06-15 02:46:22
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-18 11:08:07
-->
<template>
  <div id="container">
    <!-- <el-button @click="addData">Test</el-button> -->
    <china-map
      v-if="isLoaded"
      :metaData="tableData"
      :plotOptions="plotOptions"
    />
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
import Request from "@/http/index";
const provinces = {
  Anhui: "安徽",
  Beijing: "北京",
  Chongqing: "重庆",
  Fujian: "福建",
  Gansu: "甘肃",
  Guangdong: "广东",
  Guangxi: "广西",
  Guizhou: "贵州",
  Hainan: "海南",
  Hebei: "河北",
  Heilongjiang: "黑龙江",
  Henan: "河南",
  "Hong Kong": "香港",
  Hubei: "湖北",
  Hunan: "湖南",
  "Inner Mongolia": "内蒙古",
  Jiangsu: "江苏",
  Jiangxi: "江西",
  Jilin: "吉林",
  Liaoning: "辽宁",
  Macao: "澳门",
  Ningxia: "宁夏",
  Qinghai: "青海",
  Shaanxi: "陕西",
  Shandong: "山东",
  Shanghai: "上海",
  Shanxi: "山西",
  Sichuan: "四川",
  Taiwan: "台湾",
  Tianjin: "天津",
  Tibet: "西藏",
  Xinjiang: "新疆",
  Yunnan: "云南",
  Zhejiang: "浙江",
};
export default {
  name: "QuickView",
  components: {
    ChinaMap,
  },
  data() {
    return {
      isLoaded: false,
      isCollapse: false,
      currentTitle: "疫情速览",
      metaData: [],
      tableData: null,
      plotOptions: null,
      today: "2021-6-15",

    };
  },
  methods: {
    dataGen() {
      const keys = Object.keys(provinces);
      for(let key of keys) {
        this.metaData.push({name: provinces[key], value: Math.ceil(Math.random() * 100)})
      }
      
    },
    fetchData() {
      // while(this.isCollapse === false);
      Request.get(
        "/nationDaily/nation?observation_date_gte=2021-05-29&_limit=10"
      ).then((res) => {
        console.log(res);
        res = res.data;
        for (let i = 0; i < res.length; i++) {
          // this.converter(res[i]);
          res[i].name = res[i].province_state
          delete res[i].province_state
        }
        this.tableData = res;
        console.log(this.tableData);
      });
    },
    addData() {
      this.metaData.push({ name: "广东", value: 1 });
    },
    converter(raw) {
      const objKeys = Object.keys(raw);
      for (const k of objKeys) {
        raw[k.toLowerCase()] = raw[k];
        delete raw[k];
      }
      return raw;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  created() {
    this.fetchData();
    this.dataGen();
    console.log("fuck", this.metaData)
    this.plotOptions = {
      visualMap: {
        left: "right",
        min: 0,
        max: 100,
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
    const loading = this.$loading({
      lock: true,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)",
    });
    setTimeout(() => {
      this.isLoaded = true;
      loading.close();
    }, 500);
  },
};
</script>
