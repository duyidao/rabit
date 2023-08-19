// /src/pages/hot/hot.vue
<script setup lang="ts">
import { getHotRecommendApi } from '@/services/hot'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { HotResult } from '@/types/hot'

// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]

// uniapp如果没有父组件对应传参，则会获取页面路径传参
const query = defineProps<{
  type: string
}>()

const currentItem = hotMap.find((item) => item.type === query.type)
// 动态设置标题
uni.setNavigationBarTitle({
  title: currentItem!.title,
})

const activeIndex = ref<number>(0)

// 获取热门推荐数据
const hotRecommend = ref<HotResult>({} as HotResult)
const getHotRecommendFn = async () => {
  const res = await getHotRecommendApi(currentItem!.url, {
    page: import.meta.env.DEV ? 1 : 30,
    pageSize: 10,
  })
  hotRecommend.value = res.result
}

onLoad(() => {
  getHotRecommendFn()
})

// 触底加载事件
const finish = ref<boolean>(false)
const onScrolltolower = async () => {
  // 浅拷贝，这里做修改也能修改原来的数据
  const subType = hotRecommend.value.subTypes[activeIndex.value]

  if (subType.goodsItems.page < subType.goodsItems.pages) {
    subType.finish = false
    // 当前页码累加
    subType.goodsItems.page++
    // 调用接口获取数据
    const res = await getHotRecommendApi(currentItem!.url, {
      page: subType.goodsItems.page,
      subType: subType.id,
      pageSize: 10,
    })
    // 新数据追加到数组内
    subType.goodsItems.items.push(...res.result.subTypes[activeIndex.value].goodsItems.items)
  } else {
    subType.finish = true
    uni.showToast({
      icon: 'none',
      title: '已经拉到最底部咯',
    })
  }
}
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="hotRecommend.bannerPicture"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        v-for="(item, index) in hotRecommend.subTypes"
        :key="item.id"
        class="text"
        :class="{ active: activeIndex === index }"
        @click="activeIndex = index"
        >{{ item.title }}</text
      >
    </view>
    <!-- 推荐列表 -->
    <scroll-view
      v-if="hotRecommend.id"
      scroll-y
      class="scroll-view"
      @scrolltolower="onScrolltolower"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in hotRecommend.subTypes[activeIndex]?.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/index?id=${goods.id}`"
        >
          <image class="thumb" :src="goods.picture"></image>
          <view class="name ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{
        hotRecommend.subTypes[activeIndex].finish ? '已经拉到最底部咯' : '正在加载...'
      }}</view>
    </scroll-view>
  </view>
</template>

<style lang="scss" scoped>
page {
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
}
.viewport {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 180rpx 0 0;
  box-sizing: border-box;
}
.cover {
  width: 100%;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;

  image {
    width: 100%;
    height: 100%;
  }
}
.scroll-view {
  height: calc(100vh - 300rpx);
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  box-sizing: border-box;
  .navigator {
    width: 50%;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
    box-sizing: border-box;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
