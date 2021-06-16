<!--
 * @Date: 2021-06-15 02:46:22
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-16 17:25:03
-->
<template>
  <el-container id="container">
    <el-header id="navigation-container">Header</el-header>
    <el-container>
      <el-aside width="200px" id="side-container">Aside</el-aside>
      <el-container>
        <el-main id="main-container">Main</el-main>
        <el-footer id="footer-container">Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped>
#container {
  width: 100%;
  height: 100%;
}
#main-container {
  background-color: aquamarine;
}
#side-container {
  background-color: antiquewhite;
}
#navigation-container {
  background-color:bisque;
}
#footer-container {
  background-color: blueviolet;
}
</style>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
};
</script>
