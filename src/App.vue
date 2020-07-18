<!--
 * @Date: 2020-07-13 17:12:27
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-07-14 16:08:15
 * @FilePath: \vue_bilibili\src\App.vue
--> 
<template>
  <div id="app">
    <router-view />
    <!-- 所有路由都是在router-view渲染 -->
  </div>
</template>

<script>
//这是一个根Vue
export default {
  name: "App"
};
</script>

<style lang="stylus">
@import './asserts/styles/global.styl'

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  font-weight: 100
  text-align: center
</style>
