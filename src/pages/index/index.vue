<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerApi, getHomeCategoryApi } from '@/services/home'
import type { BannerItem, CategoryItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
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

onLoad(() => {
  getBannerFn()
  getCategoryFn()
})
</script>

<template>
  <CustomNavBar />
  <XtxSwiper :list="bannerList" />
  <!-- 分类 -->
  <CategoryPanel :list="gategoryList" />
</template>

<style></style>
