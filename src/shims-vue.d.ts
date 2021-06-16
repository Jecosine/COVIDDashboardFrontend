/*
 * @Date: 2021-06-15 02:46:22
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-06-16 19:27:47
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}