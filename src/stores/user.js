import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from "@api/login";

export const useUserStore = defineStore('user', () => {
  const userinfo = ref({})

  const getUserInfoFn = async (data) => {
    const res = await loginAPI(data);
    userinfo.value = res.result
  }

  return { userinfo, getUserInfoFn }
})
