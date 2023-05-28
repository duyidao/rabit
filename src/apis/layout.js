import http from '@/utils/http'

// 获取导航数据
export const getCategoryAPI = () => {
  return http({
    url: '/home/category/head'
  })
}

// 获取轮播图数据
export const getBannerAPI = () => {
  return http({
    url: '/home/banner'
  })
}