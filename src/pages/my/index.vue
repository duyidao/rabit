<script setup lang="ts">
import { useMemberStore } from '@/stores'
import { http } from '@/utils/http'

const memberStore = useMemberStore()

const a = async () => {
  const res = await http({
    method: 'GET',
    url: '/home/banner',
  })
  console.log(res)
}
const b = async () => {
  const res = await http({
    method: 'GET',
    url: '/member/profile',
  })
  console.log(res)
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="a()" size="mini" plain type="warn">faqingqio</button>
    <button @tap="b()" size="mini" plain type="warn">个人i休尼希</button>
  </view>
</template>

<style lang="scss">
//
</style>
