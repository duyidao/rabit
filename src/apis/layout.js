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

// 获取新鲜好物的数据
export const getNewAPI = () => {
  return http({
    url: '/home/new'
  })
}

// 获取人气推荐的数据
export const getHotAPI = () => {
  return http({
    url: '/home/hot'
  })
}