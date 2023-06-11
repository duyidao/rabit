import http from '@/utils/http'

// 猜你喜欢
export const getLikeLikeAPI = (limit) => {
  return http({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}

// 我的订单
export const getUserOrder = (params) => {
  return http({
    url:'/member/order',
    method:'GET',
    params
  })
}