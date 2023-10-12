<template>
  <van-button
    :ref="getRef"
    v-bind="initView.attributes"
    :style="initView.style"
    :class="initView.class"
    v-on="getMethods"
  >
    <slot>
      {{ initView.text }}
    </slot>
  </van-button>
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

const { initView, getRef, getMethods } = useBaseHook(props, emit, jsonData)

</script>
