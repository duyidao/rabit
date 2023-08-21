import type { AddressParams } from '@/types/address'
import type { AddressItem } from '@/types/global'
import { http } from '@/utils/http'

/**
 * 添加收货地址
 * @param data 请求参数
 */
export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

/**
 * 获取收货地址列表
 */
export const getAddressListAPI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

/**
 * 获取收货地址详情
 */
export const getAddressItemAPI = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}

/**
 * 修改收货地址
 */
export const putAddressAPI = (id: string, data: AddressParams) => {
  return http<any>({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}
