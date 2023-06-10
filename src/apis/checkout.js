import http from '@/utils/http'

// 添加购物车
export const getCheckInfoAPI = () => {
  return http({
    url: '/member/order/pre'
  })
}