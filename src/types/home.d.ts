import type { GoodsItem } from './global'

// 轮播图单项类型
export type BannerItem = {
  hrefUrl: string // 跳转地址
  id: string
  imgUrl: string // 图片地址
  type: number // 跳转类型
}

// 分类单项类型
export type CategoryItem = {
  icon: string
  id: string
  name: string
}

/** 首页-热门推荐数据类型 */
export type HotItem = {
  /** 说明 */
  alt: string
  /** id */
  id: string
  /** 图片集合[ 图片路径 ] */
  pictures: string[]
  /** 跳转地址 */
  target: string
  /** 标题 */
  title: string
  /** 推荐类型 */
  type: string
}

/** 猜你喜欢-商品类型 */
export type GuessItem = GoodsItem

/** 通用分页参数类型 */
export type PageParams = {
  /** 页码：默认值为 1 */
  page?: number
  /** 页大小：默认值为 10 */
  pageSize?: number
}