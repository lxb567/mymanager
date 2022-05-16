<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h3>{{isCollapse ? '西笔':'西笔后台管理系统'}}</h3>
    <el-menu-item :index="item.path+''" v-for="(item) in noChildren" :key="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-'+ item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :index="item.path+''" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subItem.path">
        <el-menu-item :index="subIndex+''" @click="clickMenu(subItem)">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang = "less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      menu: []
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
      
      if(this.$route.name === item.name){
        return;
      }
      this.$router.push({
        name: item.name
      })
      //面包屑
      this.$store.commit('selectMenu',item)
    }
  },
  computed: {
    noChildren() {
      return this.asyncMenu.filter(item => !item.children)
    },
    hasChildren() {
      return this.asyncMenu.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
    asyncMenu(){
      return this.$store.state.tab.menu
    }
  }
};
</script>