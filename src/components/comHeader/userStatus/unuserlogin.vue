<!--
 * @Date: 2020-07-15 23:52:43
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-07-16 17:50:38
 * @FilePath: \vue_bilibili\src\components\comHeader\userStatus\unuserlogin.vue
--> 
<template>
  <el-row
    id="nav-user"
    type="flex"
    justify="space-between"
    :gutter="4"
  >
    <el-col
      :span="6"
      :class="['nav-user-el']"
    >
      <el-popover
        ref="popover1"
        placement="bottom"
        title="标题"
        width="300"
        trigger="hover"
        content="这是一段内容"
        :open-delay="700"
      >
        <div
          slot="reference"
          class="nav-user-el-elbtn"
        >
          <span
            class="nav-user-el-elbtn-span"
          >
            <img
              class="el-icon-my-unlogin"
            />登录
          </span>
        </div>
      </el-popover>
    </el-col>
    <el-col
      :span="4"
      :class="['nav-user-el']"
    >
      <div
        type="primary"
        class="nav-user-el-elbtn-2"
      >注册</div>
    </el-col>
    <el-col
      :span="11"
      :class="['nav-user-el']"
    >
      <el-popover
        ref="popover4"
        placement="bottom"
        width="400"
        trigger="hover"
      >
        <div
          class="nav-user-el-elbtn nav-user-el-elbtn-3"
          slot="reference"
        >投稿</div>
      </el-popover>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "UnLogin"
};
</script>

<style lang="stylus" scoped>
#nav-user
  margin: 10px

  .nav-user-el
    height: 32px
    // background-color: pink
    text-align: center
    line-height: 32px
    font-size: 14px
    font-weight: 400
    align-items: center
    display: flex

    .nav-user-el-elbtn
      width: 70px
      height: 32px
      cursor: pointer
      line-height: 32px

      .nav-user-el-elbtn-span
        height: 32px
        width: 65px
        display: flex
        align-item: center
        justify-content: space-between

        .el-icon-my-unlogin
          background: url('../../../asserts/images/login/unlogin_icon.jpg') center no-repeat
          background-size: cover
          width: 30px
          height: 30px
          display: inline-block
          border-radius: 50%
          border: 1px solid #c0c0c0

    .nav-user-el-elbtn-2
      transition: all 0.4s
      line-height: 32px
      height: 32px
      cursor: pointer

      &:hover
        color: #00A1D6

    .nav-user-el-elbtn-3
      background-color: #fa7298
      color: #fff
      border-radius: 3px
      width: 100px
      height: 36px
      line-height: 36px
</style>