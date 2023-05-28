import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'

import App from './App.vue'
import router from './router'

// 引入公共样式
import '@/styles/common.scss'

const app = createApp(App)

// 图片懒加载自定义指令
app.directive('img-lazy', {
  mounted (el, binding) {
    // el：指令绑定的元素
    // binding：指令等号后的值
    console.log(el, binding);
    const { stop } = useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        console.log(isIntersecting)
        if (isIntersecting) {
          // 进入视口区域
          el.src = binding.value
          stop()
        }
      },
    )
  }
})

app.use(createPinia())
app.use(router)

app.mount('#app')
