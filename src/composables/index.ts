import type { XtxGuessInstance } from '@/types/components'
import { ref } from 'vue'

// 猜你喜欢组合式函数
export const useGuessList = () => {
  const guessRef = ref<XtxGuessInstance>()

  // 触底
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  return {
    guessRef,
    onScrolltolower,
  }
}
