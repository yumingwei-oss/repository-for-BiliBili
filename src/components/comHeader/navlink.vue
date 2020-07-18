<!--
 * @Date: 2020-07-15 09:04:29
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-07-16 22:37:58
 * @FilePath: \vue_bilibili\src\components\comHeader\navlink.vue
--> 
<template>
  <el-row
    type="flex"
    :gutter="7"
    id="nav-link"
    justify="space-between"
  >
    <el-col
      v-for="(list,index) in navlinkList"
      :href="list.url"
      :key="index"
      :span="list.span"
      :class="['nav-link-el',list.navlinkclass]"
    >
      <template v-if="list.popover">
        <el-popover
          ref="popover1"
          placement="top-start"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容"
          class="nav-link-el-popover"
        >
          <div
            slot="reference"
            style="height:36px;background-color:transprant"
            class="nav-link-el-popover-div"
          >
            <el-image
              v-if="list.image"
              style="width: 70px; height: 36px;margin-left:5px"
              :src="list.imagepath"
              fit="cover"
            >
              <div slot="placeholder">
                加载中
                <span>...</span>
              </div>
            </el-image>
            <span>
              <i
                v-if="list.iconp==='el-icon--left'"
                :class="list.icon"
              />
              {{list.content}}
              <i
                v-if="list.iconp==='el-icon--right'"
                :class="list.icon"
              />
            </span>
          </div>
        </el-popover>
      </template>
      <template v-else>
        <span>{{list.content}}</span>
      </template>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    path: {
      type: String,
      default: "index"
    }
  },
  data() {
    return {
      navlinkList: [
        {
          content: "主页",
          url: "",
          icon: "el-icon-arrow-down",
          iconp: "el-icon--right",
          popover: true,
          navlinkclass: "nav-link-main",
          span: "",
          offsetflag: true,
          image: true,
          imagepath: ""
        },
        {
          content: "番剧",
          url: "",
          navlinkclass: "nav-link-drama",
          span: ""
        },
        {
          content: "游戏中心",
          url: "",
          navlinkclass: "nav-link-gamecenter",
          span: "",
          popover: true
        },
        {
          content: "直播",
          url: "",
          navlinkclass: "nav-link-d",
          span: "",
          popover: true
        },

        {
          content: "会员购",
          url: "",
          navlinkclass: "nav-link-vipshop",
          span: ""
        },
        {
          content: "漫画",
          url: "",
          navlinkclass: "nav-link-comic",
          span: "",
          popover: true
        },
        {
          content: "赛事",
          url: "",
          navlinkclass: "nav-link-match",
          span: ""
        },
        {
          content: "BML",
          url: "",
          icon: "",
          navlinkclass: "nav-link-bml",
          span: ""
        },
        {
          content: "下载App",
          url: "",
          icon: "el-icon-mobile-phone",
          iconp: "el-icon--left",
          navlinkclass: "nav-link-download",
          span: "",
          popover: true
        }
      ],
      navlinkLoginSpanList: [7, 2, 3, 2, 3, 2, 2, 3, 4],
      navlinkIndexSpanList: []
    };
  },
  created() {
    /**
     * @description: 用于将Header部署在不同;页面上
     * @param {type} param
     * @return: return
     */

    switch (this.path) {
      case "index":
        this.navlinkList.map(item => {
          item.offsetflag ? (item.offset = 2) : "";
        });
        break;
      case "login":
        this.navlinkList.map((item, index) => {
          item.span = this.navlinkLoginSpanList[index];
          item.image
            ? (item.imagepath = require("../../asserts/images/login/BiliBili_Icon_Image.png"))
            : "";
        });
        break;
    }
  }
};
</script>

<style lang='stylus' scoped>
#nav-link
  height: 36px
  font-size: 14px
  font-weight: 400
  margin: 10px

  .nav-link-el
    text-decoration: none
    color: #000
    line-height: 36px
    height: 36px
    cursor: pointer

    .nav-link-el-popover-div
      display: flex
      justify-content: space-between
</style>