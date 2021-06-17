<!--
 * @Date: 2021-06-15 02:46:22
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-18 02:11:44
-->
<template>
  <el-row :gutter="20" id="container">
    <el-col :span="isCollapse ? 16 : 24">
      <ChinaMap :metaData="{}" :plotOptions="{}" />
    </el-col>
    <el-col :span="isCollapse ? 8 : 0">
      
    </el-col>
  </el-row>
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
    ChinaMap,
  },
  data() {
    return {
      isCollapse: false,
      currentTitle: '疫情速览'
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
