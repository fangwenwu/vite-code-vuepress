<template>
<div>
  <van-toast
    :ref="getRef"
    v-bind="initView.attributes"
    :style="initView.style"
    :class="initView.class"
    v-model:show="value"
    v-on="getMethods"
  >
  <template #message>
    <!-- 插槽 -->
      <slot v-bind="itemView">
        {{ initView.text }}
      </slot>
  </template>
  </van-toast>
</div>
</template>

<script setup name="">
import jsonData from './index.json'
import { useBaseHook } from 'vite-code'

const props = defineProps({
  itemView: {
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['update:modelValue', 'onActivate'])

const {value, initView, getRef, getMethods, onActivate } = useBaseHook(props, emit, jsonData)

</script>
