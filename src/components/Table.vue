<!--
 * @Date: 2021-06-18 02:09:51
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-18 04:16:59
-->
<template>
  <div id="container">
    <el-table :data="myData" stripe>
      <el-table-column prop="name" label="地名" sortable></el-table-column>
      <el-table-column prop="confirmed" label="确诊" sortable>
        <template #default="scope">
          <span class="confirmed bold">{{ scope.row.confirmed }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="deaths" label="死亡" sortable>
        <template #default="scope">
          <span class="deaths bold">{{ scope.row.deaths }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="recovered" label="治愈" sortable>
        <template #default="scope">
          <span class="recovered bold">{{ scope.row.recovered }}</span>
        </template></el-table-column
      >
    </el-table>
  </div>
</template>

<script lang="ts">
export default {
  name: "DataTable",
  props: {
    metaData: Array,
  },
  components: {
    // ChinaMap,
  },
  data() {
    return {
      myData: [],
      isCollapse: false,
      currentTitle: "疫情速览",
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
  mounted() {
    this.$nextTick(() => {
      console.log('meta', this.metaData);
      
      if (!this.metaData.length) {
        this.myData = [
          {
            name: "广东省",
            confirmed: 1,
            deaths: 1,
            recovered: 1,
          },
          {
            name: "广西省",
            confirmed: 2,
            deaths: 2,
            recovered: 2,
          },
        ];
      }
    });
  },
};
</script>
<style lang="scss" scoped></style>
