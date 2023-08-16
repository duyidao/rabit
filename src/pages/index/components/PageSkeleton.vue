<template name="skeleton">
  <view class="sk-container">
    <scroll-view :refresher-enabled="true" scroll-y class="scroll-view">
      <view is="components/XtxSwiper">
        <view class="carousel XtxSwiper--carousel">
          <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
            <swiper-item
              style="
                position: absolute;
                width: 100%;
                height: 100%;
                transform: translate(0%, 0px) translateZ(0px);
              "
            >
              <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
              </navigator>
            </swiper-item>
          </swiper>
          <view class="indicator XtxSwiper--indicator">
            <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
          </view>
        </view>
      </view>
      <view is="pages/index/components/CategoryPanel">
        <view
          class="category CategoryPanel--category data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        >
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-67 sk-text"
              >居家</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-963 sk-text"
              >锦鲤</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-84 sk-text"
              >服饰</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-962 sk-text"
              >母婴</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-760 sk-text"
              >个护</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-107 sk-text"
              >严选</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-197 sk-text"
              >数码</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-368 sk-text"
              >运动</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-894 sk-text"
              >杂项</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            hover-class="none"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-569 sk-text"
              >品牌</text
            >
          </navigator>
        </view>
      </view>
      <view is="pages/index/components/HotPanel">
        <view
          class="panel HotPanel--panel hot HotPanel--hot data-v-df6c854a HotPanel--data-v-df6c854a"
        >
          <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
            <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
              <text
                class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-870 sk-text"
                >特惠推荐</text
              >
              <text
                class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-135 sk-text"
                >精选全攻略</text
              >
            </view>
            <navigator
              class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
              hover-class="none"
            >
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
            </navigator>
          </view>
          <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
            <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
              <text
                class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-726 sk-text"
                >爆款推荐</text
              >
              <text
                class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-499 sk-text"
                >最受欢迎</text
              >
            </view>
            <navigator
              class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
              hover-class="none"
            >
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
            </navigator>
          </view>
          <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
            <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
              <text
                class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-146 sk-text"
                >一站买全</text
              >
              <text
                class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-181 sk-text"
                >精心优选</text
              >
            </view>
            <navigator
              class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
              hover-class="none"
            >
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
            </navigator>
          </view>
          <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
            <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
              <text
                class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-182 sk-text"
                >新鲜好物</text
              >
              <text
                class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-115 sk-text"
                >生活加分项</text
              >
            </view>
            <navigator
              class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
              hover-class="none"
            >
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
            </navigator>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style lang="scss" scoped>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-425 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-482 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-67 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-963 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-84 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-962 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-760 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-107 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-197 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-368 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-894 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-569 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-870 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-135 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-726 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-499 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-146 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-181 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-182 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-115 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
