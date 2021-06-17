<!--
 * @Date: 2021-06-18 02:09:51
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-18 02:21:56
-->
<template>
  <div id="container">
    Province
  </div>
</template>

<script lang="ts">
export default {
  name: "ProvinceStat",
  components: {
    // ChinaMap,
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
<style lang="scss" scoped>

</style>
