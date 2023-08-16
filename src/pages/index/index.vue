<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerApi, getHomeCategoryApi, getHomeHotApi } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import CustomNavBar from './components/CustomNavBar.vue'

// 轮播图
const bannerList = ref<BannerItem[]>([])
const getBannerFn = async () => {
  const res = await getHomeBannerApi()
  bannerList.value = res.result
}

// 分类
const gategoryList = ref<CategoryItem[]>([])
const getCategoryFn = async () => {
  const res = await getHomeCategoryApi()
  gategoryList.value = res.result
}

// 分类
const hotList = ref<HotItem[]>([])
const getHotFn = async () => {
  const res = await getHomeHotApi()
  hotList.value = res.result
}

onLoad(() => {
  getBannerFn()
  getCategoryFn()
  getHotFn()
})
</script>

<template>
  <!-- 自定义头部 -->
  <CustomNavBar />
  <scroll-view scroll-y class="scroll-view">
    <!-- 轮播图 -->
    <XtxSwiper :list="bannerList" />
    <!-- 分类 -->
    <CategoryPanel :list="gategoryList" />
    <!-- 推荐 -->
    <HotPanel :list="hotList" />
    <!-- 猜你喜欢 -->
    <XtxGuess />
  </scroll-view>
</template>

<style lang="scss">
page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
}

.scroll-view {
  flex: 1;
}
</style>
