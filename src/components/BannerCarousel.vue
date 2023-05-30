<script setup>
defineProps({
  bannerList: {
    type: Array,
    required: true
  },
  height: {
    type: [String, Number],
    default: 500
  }
})

/*
* 点击轮播图
* e：当前被点击的轮播图的数据
*/
const handleCarouselFn = e => {
  // this.$router.push(e.hrefUrl)
}
</script>

<template>
  <el-carousel :height="height + 'px'">
      <el-carousel-item v-for="item in bannerList" :key="item.id" @click="handleCarouselFn(item)">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
</template>

<style scoped>

</style>