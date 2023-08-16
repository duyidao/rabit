<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerApi } from '@/services/home'
import type { BannerItem } from '@/types/home'
import CustomNavBar from './components/CustomNavBar.vue'

const bannerList = ref<BannerItem[]>([])
const getBannerFn = async () => {
  const res = await getHomeBannerApi()
  bannerList.value = res.result
}

onLoad(() => getBannerFn())
</script>

<template>
  <CustomNavBar />
  <XtxSwiper :list="bannerList" />
</template>

<style></style>
