import { http } from '@/utils/http'
import type { BannerItem, CategoryItem } from '@/types/home'

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
