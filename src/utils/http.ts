/**
 * 添加拦截器：
 *  拦截 request 请求
 *  拦截 uploadFile 文件上传
 *
 * 需要实现的步骤：
 *  非 http 开头需要拼接地址
 *  请求超时
 *  添加小程序端请求体标识
 *  添加 token 请求体标识
 */

import { useMemberStore } from '@/stores/index'

// 基准路径
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1. 非 http 开通需要拼接地址
    if (!options.url.startsWith('http')) options.url = baseURL + options.url

    // 2. 请求超时，默认60s，单位为ms
    options.timeout = 10000

    // 3. 添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }

    // 4. 添加 token 请求头
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) options.header.Authorization = token
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

/**
 * 响应函数
 * @param UniApp.RequestOptions
 * @returns Promise
 *  1. 返回 Promise 对象
 *  2. 请求成功
 *    2.1 提取核心数据
 *    2.2 添加类型，支持泛型
 *  3. 请求失败
 *    3.1 网络错误 -> 提示用户更换网络
 *    3.2 401错误 -> 清除用户信息，跳转登录页
 *    3.1 其他错误 -> 根据后端错误信息提示
 */

interface Data<T> {
  code: string
  msg: string
  result: T
}

// 泛型支持
export const http = <T>(options: UniApp.RequestOptions) => {
  // 返回 Promise 对象
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,

      // 请求成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 提取核心数据 res.data
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 登录过期，清除登录信息
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          // 返回登录页
          uni.navigateTo({ url: '/pages/login/index' })
          reject(res)
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误',
          })
          reject(res)
        }
      },

      // 请求失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        // 给予轻提示
        reject(err)
      },
    })
  })
}
