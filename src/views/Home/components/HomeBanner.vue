<script setup>
import { onMounted, ref } from 'vue'
import { getBannerAPI } from '@api/layout'

const bannerList = ref([])

const getBannerFn = async () => {
  const res = await getBannerAPI()
  bannerList.value = res.result
}

onMounted(() => getBannerFn())
</script>

<template>
  <div class="home-banner">
    <BannerCarousel height="500" :bannerList="bannerList" />
  </div>
</template>


<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>