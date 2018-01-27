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
        <el-menu-item index="1-1" @click="handleTabsEdit('welcome', 'act')">Home</el-menu-item>
        <el-menu-item index="1-2" @click="handleTabsEdit('chart','act')">Chart</el-menu-item>
        <el-menu-item index="1-3" @click="handleTabsEdit('hello','act')">Hello</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="route">
        <el-menu-item index="1-4" @click="handleTabsEdit('chart','act')">Chart</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-5">
        <span slot="title">选项4</span>
        <el-menu-item index="1-5-1">选项1</el-menu-item>
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
    <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit" @tab-click="tabClick">
  <el-tab-pane
    :key="item.name"
    v-for="item in editableTabs"
    :label="item.title"
    :name="item.name"
  >
  <router-view></router-view>
<!--<tab-comp :content="item.title"></tab-comp>-->
  </el-tab-pane>
</el-tabs>
  </el-main>
</el-container>

</el-container>
</template>

<script>
import tabComp from './tabComp'
export default {
  data () {
    return {
      isCollapse: false,
      activeIndex: '1',
      activeIndex2: '1',
      editableTabsValue: '2',
      editableTabs: [{
        title: 'welcome',
        name: '1',
        content: '<router-view></router-view'
      }
      ],
      tabIndex: 2
    }
  },
  components: {
    tabComp
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
    },
    handleTabsEdit (targetName, action) {
      var count = 0
      if (action === 'act') {
        let tabs = this.editableTabs
        tabs.forEach((tab,index) => {
          if (tab.title === targetName) {
            this.editableTabsValue = tab.name
            this.$router.push({path:tab.title})
            count++
          }
        })
      }
      if (action === 'add' || count === 0 && action !=='remove' ) {
        let newTabName = ++this.tabIndex + ''
        this.editableTabs.push({
          title: targetName,
          name: newTabName,
          content: 'New Tab content'
        })
        this.editableTabsValue = newTabName
        this.$router.push({path:targetName})
      }
      if (action === 'remove') {
        let tabs = this.editableTabs
        let activeName = this.editableTabsValue
        var routerName = ''
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
                routerName = nextTab.title
              }
            }
          })
        }
        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter(tab => tab.name !== targetName)
        this.$router.push({path:routerName})
      }
    },
    tabClick (tab) {
      this.editableTabsValue = tab.name
      this.$router.push({path:tab.label})
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
