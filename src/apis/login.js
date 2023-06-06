import http from '@/utils/http'

/**
 * @description: 登录接口
 * @param {*} account 账号
 * @param {*} password 密码
 * @return {*}
 */
export const loginAPI = ({account, password}) => {
  return http({
    url:'/login',
    method: 'post',
    data:{
      account,
      password
    }
  })
}