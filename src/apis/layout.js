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

// 获取产品列表的数据
export const getGoodsAPI = () => {
  return http({
    url: '/home/goods'
  })
}

/**
 * @description: 获取分类数据
 * @param {*} id 分类id 
 * @return {*}
 */
export const getTopCategoryAPI = (id) => {
  return http({
    url:'/category',
    params:{
      id
    }
  })
}