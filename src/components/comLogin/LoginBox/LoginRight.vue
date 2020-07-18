<!--
 * @Date: 2020-07-17 10:30:26
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-07-18 01:30:10
 * @FilePath: \vue_bilibili\src\components\comLogin\LoginBox\LoginRight.vue
--> 
<template>
  <el-form
    ref="form"
    label-width="0px"
    class="login-right-form"
    id="login-form"
    :model="loginform"
    :rules="rules"
  >
    <el-tabs v-model="activeName">
      <el-tab-pane
        label="密码登录"
        name="password"
        class="tabs-pane-passwrod"
      >
        <el-form-item
          prop="nameOremail"
        >
          <el-input
            placeholder="请输入手机号或邮箱"
            type="text"
            v-model="loginform.nameOremail"
            form="login-form"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginform.password"
            type="password"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
      </el-tab-pane>
      <el-tab-pane
        label="短信登录"
        name="message"
        class="tabs-pane-message"
      >
        <el-form-item
          label-width="0px"
          prop="phone"
        >
          <el-input
            v-model="loginform.phone"
            placeholder="填写常用手机号"
          >
            <el-select
              slot="prepend"
              v-model="loginform.regionphone"
              placeholder="请选择"
              style="width:115px"
              @change="handlerSelect"
            >
              <el-option
                v-for="(item,index) in regionphones"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item
          label-width="0px"
          prop="captcha"
        >
          <el-input
            v-model.number="loginform.captcha"
            placeholder="请输入短信验证码"
          >
            <el-button
              type="primary"
              slot="suffix"
              class="captchaBtn"
              @click="handlerCaptcha"
            >获得验证码</el-button>
          </el-input>
        </el-form-item>
      </el-tab-pane>
    </el-tabs>
    <div class="remember">
      <el-checkbox
        v-model="loginform.remember"
        class="remember-checkbox"
      >
        记住我
        <span
          class="remember-tooltip"
        >不是自己的电脑上不要勾选此项</span>
      </el-checkbox>
      <div class="remember-link">
        <el-link
          :underline="false"
          type="primary"
        >无法验证?</el-link>
        <el-link
          type="primary"
          :underline="false"
        >忘记密码?</el-link>
      </div>
    </div>
    <div class="btn-box">
      <el-button
        class="btn-box-el"
        type="primary"
        native-type="submit"
      >登录</el-button>
      <el-button class="btn-box-el">注册</el-button>
    </div>
    <div class="sns">
      <el-link
        icon="el-icon-my-weibo iconfont"
        :underline='false'
      >微博登录</el-link>
      <el-link
        :underline='false'
        icon="el-icon-my-QQ iconfont"
      >qq登录</el-link>
    </div>
  </el-form>
</template>

<script>
export default {
  name: "LoginRight",
  data() {
    return {
      activeName: "password",
      loginform: {
        phone: "",
        nameOremail: "",
        captcha: "",
        password: "",
        regionphone: "86",
        region: "中国大陆",
        remember: false
      },
      rules: {
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          { min: 3, max: 16, message: "长度在 3 到 16 个字符", trigger: "blur" }
        ],
        nameOremail: [
          { required: true, message: "手机号或邮箱不能为空", trigger: "blur" },
          {
            validator: (r, v, c) => {
              let e = v.toString();
              if (/@/.test(e))
                if (!/[0-9A..z]+@(163|gmail|qq)\.com$/.test(e))
                  c(new Error("请输入正确的邮箱格式"));
                else return c();
              else if (/\d{11}/.test(e))
                if (!/^1[3456789]\d{9}/.test(e))
                  c(new Error("请输入正确的手机号格式"));
                else c();
              else c(new Error("请输入正确的手机号或邮箱格式"));
            },
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            message: "手机号不能为空",
            trigger: "blur"
          },
          {
            pattern: /^1[3456789]\d{9}/,
            message: "手机号格式不对",
            trigger: "blur"
          }
        ],
        captcha: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur"
          },
          {
            pattern: /^[\d]\d{4}[\d]$/,
            message: "验证码格式不对",
            trigger: "blur"
          }
        ]
      },
      regionphones: [
        { value: "86", label: "中国大陆" },
        { value: "852", label: "香港 " },
        { value: "853", label: "澳门 " },
        { value: "886", label: "台湾 " },
        { value: "82", label: "韩国 " },
        { value: "81", label: "日本 " },
        { value: "1", label: "美国 " },
        { value: "1", label: "加拿大 " },
        { value: "44", label: "英国" }
      ]
    };
  },
  methods: {
    handlerSelect(v) {
      this.$nextTick()
        .then(() => {
          this.loginform.region = this.regionphones.filter(item => {
            return item.value == v ? true : false;
          })[0].label;
        })
        .catch(e => console.log(e));
    },
    handlerCaptcha() {
      this.$message("发送验证码成功");
    }
  }
};
</script>
<style lang='stylus' scoped>
.login-right-form
  padding-left: 45px
  text-align: left
  margin-right: 43px
  padding-top: 45px

  .el-tabs
    padding-bottom: 15px

    .el-input
      width: 400px

  .remember
    font-size: 12px
    display: flex
    align-content: center
    justify-content: space-between

    .span
      font-size: 12px
      color: #000

    .remember-tooltip
      color: #BBBBBB
      padding-left: 5px

    .remember-link
      display: inline-block

      a
        font-size: 12px

  .btn-box
    display: flex
    align-content: center
    justify-content: space-between
    margin: 10px auto

    // padding: 0 15px
    .el-button
      width: 180px
      height: 38px
      border: 1px solid #BBBBBB

  .sns
    .el-link
      padding-right: 10px
</style>