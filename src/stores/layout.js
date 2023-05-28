import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@api/layout'

export const useLayoutStore = defineStore('layout', () => {
  const list = ref([]) // 导航列表数据

  const getCategoryFn = () => {
    getCategoryAPI().then(res => {
      console.log('pinia', res)
      list.value = res.result
    })
  }

  return { list, getCategoryFn }
})
