import http from '@/utils/http'

// 添加购物车
export const createOrderAPI = (data) => {
  return http({
    url: '/member/order',
    method: 'POST',
    data
  })
}

// 获取订单详情
export const getPayDetailAPI = (id) => {
  return http({
    url: `/member/order/${id}`
  })
}