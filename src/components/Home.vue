<template>
<el-container>
<!--
<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
-->
<el-aside :style="{ overflow: isCollapse?'visible':'auto' }" width="auto">
  <el-menu default-active="1-4-1" class="el-menu-vertical"
   @open="handleOpen" @close="handleClose" :collapse="isCollapse"
   background-color="#495060" text-color ="#ffffffb3" active-text-color="#ffffffe6">
   <div class="logo">
     <img v-if="isCollapse" src="../assets/logo2.jpg" alt="logo">
     <img v-else src="../assets/logo.jpg" alt="logo">
   </div>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1" @click="$router.push('/')">Home</el-menu-item>
        <el-menu-item index="1-3" @click="$router.push('hello')">Hello</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="route">
        <el-menu-item index="1-3" @click="$router.push('chart')">Chart</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
  </el-menu>
</el-aside>
<el-container>

  <el-header>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item class="activeCollapse" index="99">
    <el-button :style="{ transform: isCollapse?'rotateZ(180deg)':'' }" @click="activeCollapse" size="large" icon="el-icon-d-arrow-left"></el-button>
    </el-menu-item>
    <div class="nav-right">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </div>
</el-menu>

  </el-header>

  <el-main>
    <router-view></router-view>
  </el-main>
</el-container>

</el-container>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    activeCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style>
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }
  .el-menu-vertical {
    height:100%
  }
  .el-header, .el-main {
    padding: 2px 10px;
  }
  .activeCollapse {
    padding: 0px;
  }
  .activeCollapse button {
    padding: 7px 3px;
    margin: auto;
  }
  .activeCollapse [class^=el-icon-]{
    margin: 0px;
  }
  .logo img {
    height: 44px;
    width: auto;
    margin: 8px;
  }
  .nav-right {
    position: absolute !important;
    right: 0px;
  }
</style>
