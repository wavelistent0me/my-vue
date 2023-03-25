<template>
  <div class="page">
    <div class="flex width100">
      <div class="" style="width: 300px;">
        <el-menu default-active="2" class="menu" background-color="#545c64" text-color="#fff"
                 @open="handleOpen" @close="handleClose" active-text-color="#ffd04b" router>
          <el-menu-item index="home">
            <i class="el-icon-menu"></i>
            <span slot="title">home</span>
          </el-menu-item>
          <el-menu-item index="about" v-permission="['admin']">
            <i class="el-icon-setting"></i>
            <span slot="title">about</span>
          </el-menu-item>
          <el-menu-item index="index">
            <i class="el-icon-setting"></i>
            <span slot="title">index</span>
          </el-menu-item>
          <el-menu-item index="echarts">
            <i class="el-icon-setting"></i>
            <span slot="title">echarts</span>
          </el-menu-item>
          <el-menu-item index="pinchart">
            <i class="el-icon-setting"></i>
            <span slot="title">pinchart</span>
          </el-menu-item>
          <el-menu-item index="animation">
            <i class="el-icon-setting"></i>
            <span slot="title">Animation</span>
          </el-menu-item>
          <el-menu-item index="bannerlist">
            <i class="el-icon-setting"></i>
            <span slot="title">BannerList</span>
          </el-menu-item>

          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
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
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import store from '../store'
import permission from '@/directive/permission/index.js'

export default {
  name: "Main",
  created() {
    if (!store.state.role) {
      //this.$router.push('login')
      store.state.role = "editor";
    }
  },
  methods: {
    handleOpen() {},
    handleClose() {},
  },
  directives: { permission }
}
</script>

<style scoped>
.menu {
  min-height: 100vh;
}
</style>