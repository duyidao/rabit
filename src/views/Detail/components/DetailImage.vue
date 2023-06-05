<script setup>
import { ref, watch } from "vue";
import { useMouseInElement } from "@vueuse/core";
// 图片列表
defineProps({
  imageList: {
    type: Array,
    required: true
  }
})

const activeIndex = ref(0);
// 点击小图切换大图
const handleSmallFn = (i) => {
  activeIndex.value = i;
};

// 获取鼠标位置
const target = ref(null);
const { x, y, isOutside } = useMouseInElement(target);

const left = ref(0)
const top = ref(0)
watch([x, y, isOutside], () => {
  if(isOutside.value) return
  // 有效范围内横向和纵向控制
  if(x.value > 100 && x.value < 300) {
    left.value = x.value - 100
  }
  if(y.value > 400 && y.value < 600) {
    top.value = y.value - 400
  }

  // 处理边界
  if(x.value > 300) left.value = 200
  if(x.value < 100) left.value = 0
  if(y.value > 600) top.value = 200
  if(y.value < 400) top.value = 0
})
</script>

<template>
  <div class="goods-image">
    <!-- 左侧大图-->
    <div class="middle" ref="target">
      <img :src="imageList[activeIndex]" alt="" />
      <!-- 蒙层小滑块 -->
      <div class="layer" :style="{ left: `${left}px`, top: `${top}px` }"></div>
    </div>
    <!-- 小图列表 -->
    <ul class="small">
      <li
        v-for="(img, i) in imageList"
        :key="i"
        @mouseenter="handleSmallFn(i)"
        :class="{ active: activeIndex === i }"
      >
        <img :src="img" alt="" />
      </li>
    </ul>
    <!-- 放大镜大图 -->
    <div
      class="large"
      :style="[
        {
          backgroundImage: `url(${imageList[0]})`,
          backgroundPositionX: `${left * -2}px`,
          backgroundPositionY: `${top * -2}px`,
        },
      ]"
      v-show="!isOutside"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;

  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }

  .layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
    // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
    left: 0;
    top: 0;
    position: absolute;
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover,
      &.active {
        border: 2px solid $xtxColor;
      }
    }
  }
}
</style>
