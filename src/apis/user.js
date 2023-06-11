import http from '@/utils/http'

// 添加购物车
export const getLikeLikeAPI = (limit) => {
  return http({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}