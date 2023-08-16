<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerApi, getHomeCategoryApi, getHomeHotApi } from '@/services/home'
import type { XtxGuessInstance } from '@/types/components'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import PageSkeleton from './components/PageSkeleton.vue'
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

const isLoading = ref(true)
onLoad(async () => {
  isLoading.value = true
  await Promise.all(
    [getBannerFn(), getCategoryFn(), getHotFn()].map((v) =>
      v.catch((err) => uni.showToast({ icon: 'none', title: err })),
    ),
  )
  isLoading.value = false
})

const guessRef = ref<XtxGuessInstance>()
// 触底方法
const onScrolltolower = () => {
  guessRef.value?.getMore()
}

const isTriggered = ref<boolean>(false)
// 下拉刷新
const onRefresherrefresh = async () => {
  // 加载数据
  isTriggered.value = true
  await Promise.all(
    [getBannerFn(), getCategoryFn(), getHotFn()].map((v) =>
      v.catch((err) => uni.showToast({ icon: 'none', title: err })),
    ),
  )
  guessRef.value?.reset()

  // 加载完毕关闭动画
  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义头部 -->
  <CustomNavBar />
  <PageSkeleton v-if="isLoading" />
  <scroll-view
    v-else
    refresher-enabled
    scroll-y
    class="scroll-view"
    :refresher-triggered="isTriggered"
    @refresherrefresh="onRefresherrefresh"
    @scrolltolower="onScrolltolower"
  >
    <!-- 轮播图 -->
    <XtxSwiper :list="bannerList" />
    <!-- 分类 -->
    <CategoryPanel :list="gategoryList" />
    <!-- 推荐 -->
    <HotPanel :list="hotList" />
    <!-- 猜你喜欢 -->
    <XtxGuess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
page {
  height: 100vh;
  background-color: #f7f7f7;
}

.scroll-view {
  height: calc(100vh - 200rpx);
}
</style>
