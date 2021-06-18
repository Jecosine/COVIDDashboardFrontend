<!--
 * @Date: 2021-06-18 02:09:51
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-18 10:02:19
-->
<template>
  <div id="container">
    <div id="select-container">
      <el-select
        v-model="currentRegion"
        placeholder="请选择国家或地区"
        @change="changeValue"
      >
        <el-option
          v-for="item in regions"
          :key="item.value"
          :label="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div id="mix-container"></div>
  </div>
</template>

<script lang="ts">
import * as echarts from "echarts";
import Request from "@/http/index";
const countryData = [
  {
    value: "Afghanistan",
  },
  {
    value: "Albania",
  },
  {
    value: "Algeria",
  },
  {
    value: "Andorra",
  },
  {
    value: "Angola",
  },
  {
    value: "Antigua and Barbuda",
  },
  {
    value: "Argentina",
  },
  {
    value: "Armenia",
  },
  {
    value: "Australia",
  },
  {
    value: "Austria",
  },
  {
    value: "Azerbaijan",
  },
  {
    value: "Bahamas",
  },
  {
    value: "Bahrain",
  },
  {
    value: "Bangladesh",
  },
  {
    value: "Barbados",
  },
  {
    value: "Belarus",
  },
  {
    value: "Belgium",
  },
  {
    value: "Belize",
  },
  {
    value: "Benin",
  },
  {
    value: "Bhutan",
  },
  {
    value: "Bolivia",
  },
  {
    value: "Bosnia and Herzegovina",
  },
  {
    value: "Botswana",
  },
  {
    value: "Brazil",
  },
  {
    value: "Brunei",
  },
  {
    value: "Bulgaria",
  },
  {
    value: "Burkina Faso",
  },
  {
    value: "Burma",
  },
  {
    value: "Burundi",
  },
  {
    value: "Cabo Verde",
  },
  {
    value: "Cambodia",
  },
  {
    value: "Cameroon",
  },
  {
    value: "Canada",
  },
  {
    value: "Central African Republic",
  },
  {
    value: "Chad",
  },
  {
    value: "Chile",
  },
  {
    value: "China",
  },
  {
    value: "Colombia",
  },
  {
    value: "Comoros",
  },
  {
    value: "Congo (Brazzaville)",
  },
  {
    value: "Congo (Kinshasa)",
  },
  {
    value: "Costa Rica",
  },
  {
    value: "Cote d'Ivoire",
  },
  {
    value: "Croatia",
  },
  {
    value: "Cuba",
  },
  {
    value: "Cyprus",
  },
  {
    value: "Czechia",
  },
  {
    value: "Denmark",
  },
  {
    value: "Diamond Princess",
  },
  {
    value: "Djibouti",
  },
  {
    value: "Dominica",
  },
  {
    value: "Dominican Republic",
  },
  {
    value: "Ecuador",
  },
  {
    value: "Egypt",
  },
  {
    value: "El Salvador",
  },
  {
    value: "Equatorial Guinea",
  },
  {
    value: "Eritrea",
  },
  {
    value: "Estonia",
  },
  {
    value: "Eswatini",
  },
  {
    value: "Ethiopia",
  },
  {
    value: "Fiji",
  },
  {
    value: "Finland",
  },
  {
    value: "France",
  },
  {
    value: "Gabon",
  },
  {
    value: "Gambia",
  },
  {
    value: "Georgia",
  },
  {
    value: "Germany",
  },
  {
    value: "Ghana",
  },
  {
    value: "Greece",
  },
  {
    value: "Grenada",
  },
  {
    value: "Guatemala",
  },
  {
    value: "Guinea",
  },
  {
    value: "Guinea-Bissau",
  },
  {
    value: "Guyana",
  },
  {
    value: "Haiti",
  },
  {
    value: "Holy See",
  },
  {
    value: "Honduras",
  },
  {
    value: "Hungary",
  },
  {
    value: "Iceland",
  },
  {
    value: "India",
  },
  {
    value: "Indonesia",
  },
  {
    value: "Iran",
  },
  {
    value: "Iraq",
  },
  {
    value: "Ireland",
  },
  {
    value: "Israel",
  },
  {
    value: "Italy",
  },
  {
    value: "Jamaica",
  },
  {
    value: "Japan",
  },
  {
    value: "Jordan",
  },
  {
    value: "Kazakhstan",
  },
  {
    value: "Kenya",
  },
  {
    value: "Kiribati",
  },
  {
    value: "Korea, South",
  },
  {
    value: "Kosovo",
  },
  {
    value: "Kuwait",
  },
  {
    value: "Kyrgyzstan",
  },
  {
    value: "Laos",
  },
  {
    value: "Latvia",
  },
  {
    value: "Lebanon",
  },
  {
    value: "Lesotho",
  },
  {
    value: "Liberia",
  },
  {
    value: "Libya",
  },
  {
    value: "Liechtenstein",
  },
  {
    value: "Lithuania",
  },
  {
    value: "Luxembourg",
  },
  {
    value: "MS Zaandam",
  },
  {
    value: "Madagascar",
  },
  {
    value: "Malawi",
  },
  {
    value: "Malaysia",
  },
  {
    value: "Maldives",
  },
  {
    value: "Mali",
  },
  {
    value: "Malta",
  },
  {
    value: "Marshall Islands",
  },
  {
    value: "Mauritania",
  },
  {
    value: "Mauritius",
  },
  {
    value: "Mexico",
  },
  {
    value: "Micronesia",
  },
  {
    value: "Moldova",
  },
  {
    value: "Monaco",
  },
  {
    value: "Mongolia",
  },
  {
    value: "Montenegro",
  },
  {
    value: "Morocco",
  },
  {
    value: "Mozambique",
  },
  {
    value: "Namibia",
  },
  {
    value: "Nepal",
  },
  {
    value: "Netherlands",
  },
  {
    value: "New Zealand",
  },
  {
    value: "Nicaragua",
  },
  {
    value: "Niger",
  },
  {
    value: "Nigeria",
  },
  {
    value: "North Macedonia",
  },
  {
    value: "Norway",
  },
  {
    value: "Oman",
  },
  {
    value: "Pakistan",
  },
  {
    value: "Panama",
  },
  {
    value: "Papua New Guinea",
  },
  {
    value: "Paraguay",
  },
  {
    value: "Peru",
  },
  {
    value: "Philippines",
  },
  {
    value: "Poland",
  },
  {
    value: "Portugal",
  },
  {
    value: "Qatar",
  },
  {
    value: "Romania",
  },
  {
    value: "Russia",
  },
  {
    value: "Rwanda",
  },
  {
    value: "Saint Kitts and Nevis",
  },
  {
    value: "Saint Lucia",
  },
  {
    value: "Saint Vincent and the Grenadines",
  },
  {
    value: "Samoa",
  },
  {
    value: "San Marino",
  },
  {
    value: "Sao Tome and Principe",
  },
  {
    value: "Saudi Arabia",
  },
  {
    value: "Senegal",
  },
  {
    value: "Serbia",
  },
  {
    value: "Seychelles",
  },
  {
    value: "Sierra Leone",
  },
  {
    value: "Singapore",
  },
  {
    value: "Slovakia",
  },
  {
    value: "Slovenia",
  },
  {
    value: "Solomon Islands",
  },
  {
    value: "Somalia",
  },
  {
    value: "South Africa",
  },
  {
    value: "South Sudan",
  },
  {
    value: "Spain",
  },
  {
    value: "Sri Lanka",
  },
  {
    value: "Sudan",
  },
  {
    value: "Suriname",
  },
  {
    value: "Sweden",
  },
  {
    value: "Switzerland",
  },
  {
    value: "Syria",
  },
  {
    value: "Taiwan*",
  },
  {
    value: "Tajikistan",
  },
  {
    value: "Tanzania",
  },
  {
    value: "Thailand",
  },
  {
    value: "Timor-Leste",
  },
  {
    value: "Togo",
  },
  {
    value: "Trinidad and Tobago",
  },
  {
    value: "Tunisia",
  },
  {
    value: "Turkey",
  },
  {
    value: "US",
  },
  {
    value: "Uganda",
  },
  {
    value: "Ukraine",
  },
  {
    value: "United Arab Emirates",
  },
  {
    value: "United Kingdom",
  },
  {
    value: "Uruguay",
  },
  {
    value: "Uzbekistan",
  },
  {
    value: "Vanuatu",
  },
  {
    value: "Venezuela",
  },
  {
    value: "Vietnam",
  },
  {
    value: "West Bank and Gaza",
  },
  {
    value: "Yemen",
  },
  {
    value: "Zambia",
  },
  {
    value: "Zimbabwe",
  },
];
export default {
  name: "International",

  components: {
    // ChinaMap,
  },
  data() {
    return {
      regions: countryData,
      currentRegion: "",
      firstTime: true,
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
              return idx * 2;
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
              return idx * 2;
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
              return idx * 2;
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
              return idx * 2;
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
              return idx * 2;
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
              return idx * 2;
            },
          },
        ],
      },
    };
  },
  methods: {
    changeValue(current) {
      this.currentRegion = current;
      this.clearData();
      this.fetchData();
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clearData() {
      this.deaths = [];
      this.confirmed = [];
      this.recovered = [];
    },
    fetchData() {
      const that = this;
      Request.get(`/countryAgg/covid?Country=${this.currentRegion}&_limit=1000`)
        .then((res) => {
          res = res.data;
          // console.log(res);
          for (let i in res) {
            // console.log(res[i]);
            if (that.firstTime) {
              that.xAxis.push(res[i].Date);
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
          this.myOption.series[3].data = this.myOption.series[0].data = this.confirmed;
          this.myOption.series[4].data = this.myOption.series[1].data = this.deaths;
          this.myOption.series[5].data = this.myOption.series[2].data = this.recovered;
          this.myOption.xAxis.data = this.xAxis;
          this.charts.setOption(this.myOption);
          this.firstTime = false;
        });
    },
  },
  mounted() {
    this.currentRegion = "Afghanistan";
    this.fetchData();
  },
  created() {},
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
