import { http } from '@/utils/http'
import type { BannerItem, CategoryItem, HotItem, GuessItem, PageParams } from '@/types/home'
import type { PageResult } from '@/types/global'

// 首页轮播图
export const getHomeBannerApi = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

// 首页分类导航
export const getHomeCategoryApi = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

// 首页热门推荐
export const getHomeHotApi = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

// 首页猜你喜欢
export const getHomeGuessApi = (pageParams: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data: {
      pageParams,
    },
  })
}
