<!--
 * @Date: 2020-07-17 00:35:38
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-07-18 11:02:05
 * @FilePath: \vue_bilibili\src\components\comLogin\LoginBody.vue
--> 
<template>
  <el-container class="login-body">
    <el-header
      class="top-banner"
      height="86px"
    >
      <el-image
        style="width:980px ;height: 106px"
        :src="topbannerurl"
        fit="cover"
        lazy
      ></el-image>
    </el-header>
    <el-container>
      <el-header
        class="title-line"
        height="29px"
      >
        <!-- Header content -->
        <span>登录</span>
      </el-header>
      <el-main class="login-box">
        <!-- Main content -->
        <el-row
          :gutter="1"
          type="flex"
          justify="space-between"
        >
          <el-col
            :span="12"
            class="login-left"
          >
            <login-left></login-left>
          </el-col>
          <div class="login-box-line"></div>
          <el-col
            :span="12"
            class="login-right"
          >
            <login-right></login-right>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-footer>
      <p>
        登录即代表你同意
        <a href>用户协议</a>和
        <a href>隐私政策</a>
      </p>
    </el-footer>
  </el-container>
</template>

<script>
// import LoginRight from "../comLogin/LoginBox/LoginRight.vue";
import LoginRight from "@/components/comLogin/LoginBox/LoginRight";
import LoginLeft from "@/components/comLogin/LoginBox/LoginLeft";
export default {
  name: "LoginBody",
  components: { LoginRight ,LoginLeft},
  data() {
    return {
      topbannerurl: require("../../asserts/images/login/Header.png")
    };
  }
};
</script>

<style lang='stylus' scoped>
.login-body
  .top-banner
    margin-bottom: 20px
    background-color: #00a1d8

  .title-line
    width: 980px
    margin: 0 auto
    margin-bottom: 28px
    border-bottom: 1px solid #ddd
    padding: 0 20px

    span
      font-size: 38px
      font-weight: 400
      padding: 0 20px
      background-color: #fff

  .login-box
    width: 980px
    margin: 0 auto
    padding: 0
    overflow-x: hidden

    .el-row
      .el-col
        height: 367px

      .el-col:last-child
        // border-left: 1px solid #ddd
        height: 338px

      .login-box-line
        background-color: #ddd
        width: 1px
        margin-top: 30px

  .el-footer
    font-size: 12px
    margin: 10px auto
    width: 980px

    a
      text-decoration: none
      color: #00a1d6
</style>