import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCarttStore = defineStore('cart', () => {
  const cartList = ref([]) // 购物车列表数据
  const cartCount = ref(0) // 购物车商品总数
  const cartPrice = ref(0) // 购物车商品总价

  const addCart = (e) => {
    // 添加购物车操作
    let obj = {
      id: e.id,
      name: e.name,
      price: e.price,
      count: e.count,
      skuId: e.skuId,
      picture: e.mainPictures[0],
      attrsText: e.specsText,
      selected: true
    }

    // 判断是否添加过：添加过：数量加一；没添加过，添加数据
    const item = cartList.value.find(v => v.skuId === obj.skuId)
    if(item) {
      item.count += obj.count
    } else {
      cartList.value.push(obj)
    }
  }

  // 购物车数据计算
  cartCount.value = computed(() => cartList.value.reduce((pre, next) => pre + next.count, 0))
  // 购物车总价数据计算
  cartPrice.value = computed(() => cartList.value.reduce((pre, next) => pre + next.count * next.price, 0))

  // 删除购物车内容
  const delCart = skuId => {
    cartList.value = cartList.value.filter(item => item.skuId !== skuId)
  }

  return { cartList, addCart, delCart, cartCount, cartPrice }
}, {
  persist: true
})
