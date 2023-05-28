<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <!-- 轮播图 -->
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>

  <!-- 新鲜好物 -->
  <HomePanel title="新鲜好物" subTitle="新鲜好物，好多商品">
    <HomeNew />
  </HomePanel>

  <!-- 人气推荐 -->
  <HomePanel title="人气推荐" subTitle="人气推荐，猜你喜欢">
    <HomeHot />
  </HomePanel>

  <!-- 商品 -->
  <HomeProduct />
</template>

<style scoped>

</style>