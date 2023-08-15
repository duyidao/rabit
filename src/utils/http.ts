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
