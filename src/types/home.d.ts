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
