import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from "@api/login";

export const useUserStore = defineStore('user', () => {
  const userinfo = ref({})

  // 登陆获取用户信息
  const getUserInfoFn = async (data) => {
    const res = await loginAPI(data);
    userinfo.value = res.result || {}
  }

  // 用户退出登录
  const logoutFn = () => {
    userinfo.value = {}
  }

  return { userinfo, getUserInfoFn, logoutFn }
}, {
  persist: true
})
