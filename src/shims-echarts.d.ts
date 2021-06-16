/*
 * @Date: 2021-06-16 19:28:25
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-16 19:33:23
 */
/* eslint-disable */
import Vue from 'vue';
import * as echarts from 'echarts'
declare module 'vue/types/vue' {
  interface Vue {
    $echarts: echarts
  }
}