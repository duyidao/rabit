import { http } from '@/utils/http'
import type { BannerItem } from '@/types/home'

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
