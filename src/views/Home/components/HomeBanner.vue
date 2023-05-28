<script setup>
import { onMounted, ref } from 'vue'
// pinia获取导航数据
import { getBannerAPI } from '@api/layout'

const bannerList = ref([])

const getBannerFn = async () => {
  const res = await getBannerAPI()
  bannerList.value = res.result
}

onMounted(() => getBannerFn())

/*
* 点击轮播图
* e：当前被点击的轮播图的数据
*/
const handleCarouselFn = e => {
  // this.$router.push(e.hrefUrl)
}
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id" @click="handleCarouselFn(item)">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
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