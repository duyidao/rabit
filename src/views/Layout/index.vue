<script setup>
import { onMounted, ref } from 'vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFixed from './components/LayoutFixed.vue'

// pinia获取导航数据
import { useLayoutStore } from '@/stores/layout'
const layoutStore = useLayoutStore()

onMounted(() => {
  layoutStore.getCategoryFn()
})
</script>

<template>
  <!-- 头部 -->
  <LayoutHeader></LayoutHeader>
  <LayoutFixed></LayoutFixed>

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