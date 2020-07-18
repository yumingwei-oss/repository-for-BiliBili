<!--
 * @Date: 2020-07-13 18:38:05
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-07-18 09:47:11
 * @FilePath: \vue_bilibili\src\public\login.vue
 * @这是一个页面文件
--> 
<template>
  <div id="vue-login">
    <login-header
      path="login"
      id="vue-login-header"
      status="unlogin"
    ></login-header>
    <login-body id="vue-login-body"></login-body>
    <login-footer vue-login-footer></login-footer>
  </div>
</template>

<script>
//这是一个单页面
import HeaderComp from "../components/comHeader/Header.vue";
import LoginBody from "../components/comLogin/LoginBody.vue";
import FooterComp from "../components/Footer.vue";
export default {
  name: "login",
  components: {
    LoginHeader: HeaderComp,
    LoginBody: LoginBody,
    LoginFooter: FooterComp
  },
  data() {
    return {};
  }
};
</script>

<style lang='stylus' scoped>
#vue-login
  overflow-x: hidden

  #vue-login-header
    padding-left: 25px
    overflow-y: hidden
    height: 56px
</style>