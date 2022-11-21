<template>
  <div class="page">
    <div class="spacebetween width100">
      <el-col :span="12">
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
                 @open="handleOpen" @close="handleClose" active-text-color="#ffd04b" router>
          <el-menu-item index="login">
            <i class="el-icon-menu"></i>
            <span slot="title">登录</span>
          </el-menu-item>
          <el-menu-item index="home">
            <i class="el-icon-menu"></i>
            <span slot="title">home</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航五</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: "Main",
  created() {
    console.log(store.state.role);
  },
  methods: {
    handleOpen() {

    },
    handleClose() {

    },
  },
}
</script>

<style scoped>

</style>