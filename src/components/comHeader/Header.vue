<!--
 * @Date: 2020-07-13 20:25:59
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-07-16 14:21:38
 * @FilePath: \vue_bilibili\src\components\comHeader\Header.vue
 * @这是一个组件文件
--> 
<template>
  <el-row
    id="nav-header"
    type="flex"
    :gutter="15"
    justify="space-betwee"
  >
    <!-- This is Header -->
    <el-col
      v-for="(item,index) in colspanlist"
      :key="index"
      :class="[item.class,'header-el']"
      :span="item.span"
    >
      <component
        :is="item.class"
        :key="index"
        v-bind="$props"
      ></component>
    </el-col>
  </el-row>
</template>

<script>
import NavLink from "./navlink.vue";
import NavSearch from "./navsearch.vue";
import NavUser from "./navuser.vue";

export default {
  name: "HeaderComp",
  components: {
    NavLink,
    NavSearch,
    NavUser
  },
  props: {
    path: {
      type: String,
      default: ""
    },
    status: {
      type: String,
      defalut: "unlogin"
    }
  },
  data() {
    return {
      colspanlist: [
        {
          class: "nav-link",
          span: 10
        },
        {
          class: "nav-search",
          span: 9
        },
        {
          class: "nav-user",
          span: 5
        }
      ]
    };
  },
  methods: {},
  mounted() {
    this.colspanlist.map(item => {
      switch (item.class) {
        case "nav-link":
          item.path = this.path;
          break;
        case "nav-user":
          item.status = this.status;
          break;
      }
    });
  }
};
</script>

<style lang="stylus" scoped>
#nav-header
  font-weight: 500
  font-size: 14px
  text-align: center
  height: 56px
  background-color: transparent
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5)
</style>
