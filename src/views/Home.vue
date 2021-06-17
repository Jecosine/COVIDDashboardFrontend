<!--
 * @Date: 2021-06-15 02:46:22
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-18 02:16:02
-->
<template>
  <el-container id="container">
    <el-aside :width="isCollapse?'64px':'200px'" id="side-container">
      <el-menu
        id="side-menu"
        default-active="/quickview"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        router
      >
        <el-menu-item index="0" id="title-item">
          <i  @click="isCollapse = !isCollapse"
              :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
          <template #title>
            <span id="logo-container">Asterisk</span>
          </template>
        </el-menu-item>
        <el-menu-item 
          index="/quickview"
          key="quickview"
          >
          <i class="el-icon-s-order"></i>
          <template #title>疫情速览</template>
        </el-menu-item>
        <el-submenu index="2">
          <template #title>
            <i class="el-icon-location"></i>
            <span>国内疫情</span>
          </template>
          <el-menu-item-group>
            <template #title>历史数据</template>
            <el-menu-item index="2-1">各省份统计</el-menu-item>
            <el-menu-item index="2-2">自定义查询</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="数据下载">
            <el-menu-item index="2-3" disabled>时间线数据</el-menu-item>
            <el-menu-item index="2-4" disabled>汇总数据</el-menu-item>
          </el-menu-item-group>
        
        </el-submenu>
        <el-submenu index="3">
          <template #title>
            <i class="el-icon-s-marketing"></i>
            <span>国际疫情</span>
          </template>
          <el-menu-item-group>
            <template #title>历史数据</template>
            <el-menu-item index="3-1">各国数据</el-menu-item>
            <el-menu-item index="3-2">自定义查询</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="数据下载" disabled>
            <el-menu-item index="3-3" disabled>时间线数据</el-menu-item>
            <el-menu-item index="3-4" disabled>汇总数据</el-menu-item>
          </el-menu-item-group>
        
        </el-submenu>
        <el-menu-item index="4" disabled>
          <i class="el-icon-info"></i>
          <template #title>关于</template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container :class="isCollapse ? 'expanded' : 'noexpanded'">
      <el-header id="navigation-container" height="3rem">
        <i class="el-icon-data-analysis"></i>
        {{currentTitle}}
      </el-header>
      <el-container>
        <el-main id="main-container">
          <router-view />
        </el-main>
        <el-footer id="footer-container"></el-footer>
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
  /* background-color:aquamarine; */
}
#side-container {
  border-right: solid 1px rgba(0, 0, 0, 0.1);
  text-align: left;
  /* background-color: antiquewhite; */
}
#side-menu {
  height: 100vh;
}
.expanded {
  width: calc(100vw - 64px);
}
.noexpanded {
  width: calc(100vw - 200px);
}
#navigation-container {
  text-align: left;
  line-height: 3rem;
  height: 3rem;
  box-shadow: 0 0 0.4rem 0.4rem rgba(0,0,0,0.06);
  font-weight: bolder;
  padding-left: 2rem;
  color: #666260;
  /* background-color:bisque; */
}
#footer-container {
  /* background-color: blueviolet; */
}
#logo-container {
  font-size: 1rem;
  font-weight: bold!important;
  color: #666260;
}
#logo-container .el-button {
  margin-right: 0.5rem;
}
#title-item:hover {
  background-color: white;
}
</style>
<script>
// @ is an alias to /src
// import ChinaMap from "@/components/ChinaMap.vue";

export default {
  name: "Home",
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
