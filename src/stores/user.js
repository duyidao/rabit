import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from "@api/login";
import { useCarttStore } from './cart'

export const useUserStore = defineStore('user', () => {
  const userinfo = ref({})
  const { clearCart, getCartListFn } = useCarttStore()

  // 登陆获取用户信息
  const getUserInfoFn = async (data) => {
    const res = await loginAPI(data);
    userinfo.value = res.result || {}
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
