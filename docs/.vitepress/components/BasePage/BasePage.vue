<template>
  <div
    v-bind="initView.attributes"
    :style="initView.style"
    :class="initView.class"
  >
    <slot>page</slot>
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
const emit = defineEmits(['update:modelValue','onActivate'])

const {initView,value, getRef, getMethods} = useBaseHook(props,emit,jsonData)

</script>
