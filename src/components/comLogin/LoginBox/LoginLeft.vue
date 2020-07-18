<!--
 * @Date: 2020-07-17 10:29:51
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-07-18 16:51:10
 * @FilePath: \vue_bilibili\src\components\comLogin\LoginBox\LoginLeft.vue
--> 
<template>
  <div id="login-qrcode">
    <div class="qrcode-con">
      <i class="qrcode-icon" />
      <qr-code
        class="qrcode-img"
        :size="qrcode.size"
        :text="qrcode.text"
        :correctlevel="qrcode.correctlevel"
        :callback="handlerQrcode"
      ></qr-code>
      <div
        :class="{'qrcode-tip-hover':qrcode.hover,'qrcode-tip':true}"
        ref="qrcodetip"
      ></div>
      <div
        class="qrcode-refresh"
        v-if="!qrcode.hover"
      >
        <div
          class="qrcode-overdue"
          @click="handlerQrcodeRefresh"
        >点击刷新</div>
      </div>
    </div>
    <div class="qrcode-footer">
      <dvi class="qrcode-message">
        <p>{{qrcode.status}}</p>
        <p>
          请使用
          <a
            href="https://app.bilibili.com/"
            target="_blank"
          >哔哩哔哩客户端</a>
        </p>
        <p>扫码登录</p>
        <p>或扫码下载App</p>
      </dvi>
    </div>
  </div>
</template>

<script>
import vueQr from "vue-qr";
export default {
  name: "LoginLeft",
  components: {
    QrCode: vueQr
  },
  data() {
    return {
      qrcode: {
        size: 500,
        text: "https://www.bilibili.com",
        correctlevel: "3",
        timeout: false,
        hover: false,
        status: "二维码已失效"
      }
    };
  },
  watch: {
    "qrcode.timeout": {
      deep: true,
      handler: function(nv, ov) {
        if (nv) this.qrcode.hover = true;
        else this.qrcode.hover = false;
      }
    }
  },
  methods: {
    handlerQrcode(dataurl, qid) {
      this.qrcode.timeout = true;
      window.setTimeout(() => {
        this.qrcode.timeout = false;
      }, 300000);
    },
    handlerQrcodeRefresh() {
      let baseText = "https://www.bilibili.com/v/anime/finish/#/all/default/0/";
      let Text = baseText + Math.floor(Math.random() * 10).toString();
      this.qrcode.text = Text;
    }
  }
};
</script>

<style lang='stylus'>
#login-qrcode
  margin-right: 10px

  .qrcode-con
    margin: 0px auto
    margin-top: 75px
    height: 140px
    width: 140px

    .qrcode-icon
      position: absolute
      width: 70px
      height: 70px
      left: 160px
      top: 20px
      background-image: url('../../../asserts/images/login/qrcode_top.png')
      background-position: -80px 0px

    .qrcode-img
      height: 140px
      width: 140px
      margin: 0 auto

    .qrcode-tip
      position: absolute
      width: 479px
      height: 192px
      top: 20px
      left: 0px
      background-color: #ffffff
      background-image: url('../../../asserts/images/login/qrcode_hover.png')
      background-repeat: no-repeat
      background-size: cover
      opacity: 0
      transition: all 0.5s

    .qrcode-tip-hover
      &:hover
        opacity: 1

    .qrcode-refresh
      position: absolute
      width: 140px
      height: 140px
      top: 75px
      left: 169.5px
      background-color: RGBA(244, 244, 244, 0.6)

      .qrcode-overdue
        background-color: #ffffff
        width: 60px
        height: 42px
        margin: 40px auto
        padding: 40px 0 5px
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5)
        color: #0594c7
        text-align: center
        background-image: url('../../../asserts/images/login/qrcode_refresh.png')
        background-repeat: repeat
        background-position: 8px 3px
        cursor: pointer

  .qrcode-footer
    height: 140px
    margin-top: 10px
    text-align: center
    font-size: 14px
    background-image: url('../../../asserts/images/login/qrcode_around.png')
    background-position: 0px -10px
    font-weight: 500

    .qrcode-message
      p:first-child
        font-size: 18px
        color: #000

      p
        margin-bottom: 1px
        letter-spacing: 2px
        color: rgba(0, 0, 0, 0.5)

        a
          text-decoration: none
          color: #00a1d6
</style>
    