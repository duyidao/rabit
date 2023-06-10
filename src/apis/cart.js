import http from '@/utils/http'

// 添加购物车
export const insertCartAPI = ({skuId, count}) => {
  return http({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

// 获取购物车列表
export const getCartListAPI = () => {
  return http({
    url: '/member/cart'
  })
}

// 删除购物车数据
export const removeCartItemAPI = (ids) => {
  return http({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

// 合并购物车
export const mergeCartListAPI = (data) => {
  return http({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}