<!--
 * @Date: 2021-06-18 02:09:51
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-18 02:11:36
-->
<template>
  <div id="container">
    Hello
  </div>
</template>

<script lang="ts">
export default {
  name: "ChinaHistory",
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
