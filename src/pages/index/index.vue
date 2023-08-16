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
  <!-- 轮播图 -->
  <XtxSwiper :list="bannerList" />
  <!-- 分类 -->
  <CategoryPanel :list="gategoryList" />
  <!-- 推荐 -->
  <HotPanel :list="hotList" />
</template>

<style></style>
