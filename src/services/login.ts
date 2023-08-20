import type { LoginResult } from '@/types/member'
import { http } from '@/utils/http'

// 手机快捷登录
type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}
export const loginApi = (data: LoginParams) => {
  return http<any>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

// 小程序登录
export const LoginMinApi = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
