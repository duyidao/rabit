<script setup>
import { ref } from "vue";
defineProps({
  checkInfo: {
    type: Object,
    required: true
  },
  show: {
    type: Boolean,
    default: false
  }
})


const emit = defineEmits(['update:modelValue', 'handleConfirmFn'])

const handleCloseFn = () => {
  emit('update:modelValue', false)
}

// 切换地址
const activeAddress = ref({})
const handleClickFn = e => {
  activeAddress.value = e
}

const handleConfirmFn = () => {
  emit('handleConfirmFn', activeAddress.value)
  handleCloseFn()
}
</script>

<template>
  <el-dialog :modelValue="show" title="切换收货地址" width="30%" center @close="handleCloseFn">
    <div class="addressWrapper">
      <div
        class="text item"
        :class="{'active': activeAddress.id ? item.id === activeAddress.id : item.isDefault == 0}"
        v-for="item in checkInfo.userAddresses"
        :key="item.id"
        @click="handleClickFn(item)"
      >
        <ul>
          <li>
            <span>收<i />货<i />人：</span>{{ item.receiver }}
          </li>
          <li><span>联系方式：</span>{{ item.contact }}</li>
          <li><span>收货地址：</span>{{ item.fullLocation + item.address }}</li>
        </ul>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button>取消</el-button>
        <el-button type="primary" @click="handleConfirmFn">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
.addressWrapper {
  max-height: 500px;
  overflow-y: auto;
}

.text {
  flex: 1;
  min-height: 90px;
  display: flex;
  align-items: center;

  &.item {
    border: 1px solid #f5f5f5;
    margin-bottom: 10px;
    cursor: pointer;

    &.active,
    &:hover {
      border-color: $xtxColor;
      background: lighten($xtxColor, 50%);
    }

    > ul {
      padding: 10px;
      font-size: 14px;
      line-height: 30px;
    }
  }
}
</style>
