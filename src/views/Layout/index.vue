<script setup>
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
</script>

<template>
  <!-- 头部 -->
  <LayoutHeader></LayoutHeader>

  <!-- 导航 -->
  <LayoutNav></LayoutNav>

  <!-- 二级路由 -->
  <router-view></router-view>

  <!-- 底部 -->
  <LayoutFooter></LayoutFooter>
</template>

<style lang="scss" scoped>
.priceColor {
  color: $priceColor;
}
</style>