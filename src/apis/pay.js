import http from '@/utils/http'

// 添加购物车
export const createOrderAPI = (data) => {
  return http({
    url: '/member/order',
    method: 'POST',
    data
  })
}