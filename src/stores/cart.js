import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCarttStore = defineStore('cart', () => {
  const cartList = ref([]) // 购物车列表数据

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

  // 购物车商品总数数据计算
  const cartCount = computed(() => cartList.value.reduce((pre, next) => pre + next.count, 0))
  // 购物车商品总价数据计算
  const cartPrice = computed(() => cartList.value.reduce((pre, next) => pre + next.count * next.price, 0))
  // 购物车已选数量数据计算
  const cartChoseCount = computed(() => cartList.value.reduce((pre, next) => pre + next.selected ? 1 : 0, 0))
  // 购物车已选总价数据计算
  const cartChosePrice = computed(() => cartList.value.reduce((pre, next) => pre + next.selected ? next.count * next.price : 0, 0))

  // 删除购物车内容
  const delCart = skuId => {
    cartList.value = cartList.value.filter(item => item.skuId !== skuId)
  }

  // 修改购物车的选中状态
  const updateCheck = (e, i) => {
    const item = cartList.value.find(item => item.skuId === i.skuId)
    item.selected = e
  }

  // 全选与取消全选实现
  const updateAllCheck = e => {
    cartList.value = cartList.value.map(item => {
      return {
        ...item,
        selected: e
      }
    })
  }

  return { cartList, addCart, delCart, cartCount, cartPrice, cartChoseCount, cartChosePrice, updateCheck, updateAllCheck }
}, {
  persist: true
})
