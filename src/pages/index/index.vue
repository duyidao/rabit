<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { http } from '@/utils/http'
import CustomNavBar from './components/CustomNavBar.vue'

const bannerList = ref([])
const getBannerFn = async () => {
  const res = await http<unknown>({
    method: 'GET',
    url: '/home/banner',
  })
  console.log(res)
  bannerList.value = res.result
}

onMounted(() => getBannerFn())
</script>

<template>
  <CustomNavBar />
  <XtxSwiper :list="bannerList" />
</template>

<style></style>
