<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getHomeGuessApi } from '@/services/home'
import type { PageParams, GuessItem } from '@/types/home'

const pageParams = ref<Required<PageParams>>({
  page: 1,
  pageSize: 10,
})

const guessList = ref<GuessItem[]>([])
const finish = ref<boolean>(false)
const getHomeGuessFn = async () => {
  if (finish.value) return uni.showToast({ icon: 'none', title: '已经加载完毕啦' })

  const res = await getHomeGuessApi(pageParams.value)
  guessList.value.push(...res.result.items)

  // 判断是否加载完全部数据
  if (pageParams.value.page < res.result.pages) {
    pageParams.value.page++
  } else {
    finish.value = true
  }
}

// 下拉刷新重置数据
const resetDataFn = () => {
  guessList.value = []
  pageParams.value.page = 1
  getHomeGuessFn()
}

// 组件生命周期调用
onMounted(() => getHomeGuessFn())

// 暴露方法
defineExpose({
  reset: resetDataFn,
  getMore: getHomeGuessFn,
})
</script>

<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in guessList"
      :key="item.id"
      :url="`/pages/goods/index?id=${item.id}`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name"> {{ item.name }} </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text"> {{ finish ? '已经拉到底啦' : '正在加载...' }} </view>
</template>

<style lang="scss" scoped>
:host {
  display: block;
}
/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,
    &::after {
      content: '';
      width: 20rpx;
      height: 20rpx;
      background-image: url(@/static/images/bubble.png);
      background-size: contain;
      margin: 0 10rpx;
    }
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;
  box-sizing: border-box;
  .guess-item {
    width: 50%;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
    box-sizing: border-box;
  }
  .image {
    width: 304rpx;
    height: 304rpx;
  }
  .name {
    height: 75rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }
  .small {
    font-size: 80%;
  }
}
// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}
</style>
