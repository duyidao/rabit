// 封装倒计时逻辑函数
import { computed, ref, onUnmounted } from 'vue'
import dayjs from 'dayjs'

export const useCountDown = () => {
  // 1.响应式数据
  const time = ref(0)
  // 格式化为时间xx分xx秒的形式（可用计算属性）
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))

  let timer = null

  // 2.开启倒计时的函数
  const start = (currentTime) => {
    // 先赋值
    time.value = currentTime
    // 每隔一秒钟就自减一
    timer = setInterval(() => {
      time.value -= 1
    }, 1000);
  }

  // 组件销毁时取消定时器
  onUnmounted(() => {
    timer && clearInterval(timer)
    timer = null
  })

  return { formatTime, start }
}