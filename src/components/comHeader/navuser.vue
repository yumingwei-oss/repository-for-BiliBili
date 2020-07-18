<!--
 * @Date: 2020-07-15 09:04:55
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-07-16 00:04:12
 * @FilePath: \vue_bilibili\src\components\comHeader\navuser.vue
--> 
<template>
  <component :is="componentId"></component>
</template>

<script>
import UnLogin from "./userStatus/unuserlogin.vue";
import Login from "./userStatus/userlogin.vue";
export default {
  name: "NavUser",
  props: {
    status: {
      type: String,
      default: "unlogin"
    }
  },
  computed: {
    componentId() {
      return this.status === "unlogin" ? "un-login" : "login";
    }
  },
  components: {
    UnLogin,
    Login
  }
};
</script>

<style lang='stylus' scoped></style>