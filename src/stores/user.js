import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from "@api/login";
import { useCarttStore } from './cart'
import { mergeCartListAPI } from '@api/cart'

export const useUserStore = defineStore('user', () => {
  const userinfo = ref({})
  const { cartList, clearCart, getCartListFn } = useCarttStore()

  // 登陆获取用户信息
  const getUserInfoFn = async (data) => {
    const res = await loginAPI(data);
    userinfo.value = res.result || {}

    // 登陆后合并购物车，再获取最新的购物车数据
    cartList && await mergeCartListAPI(cartList.map(item => {
      return {
        skuId: item.skuId,
        count: item.count,
        selected: item.selected
      }
    }))
    getCartListFn()
  }

  // 用户退出登录
  const logoutFn = () => {
    userinfo.value = {}
    clearCart()
  }

  return { userinfo, getUserInfoFn, logoutFn }
}, {
  persist: true
})
