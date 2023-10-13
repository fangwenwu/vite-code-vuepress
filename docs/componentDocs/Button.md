<script setup>

  import { onMounted,shallowRef } from 'vue'
  const BaseButton = shallowRef(null)
  onMounted(() => {
    import('../.vitepress/components/BaseButton/index.vue').then((module) => {
      BaseButton.value = module.default
    })
  })

</script>
# Button 按钮
 
#### 常用 button 按钮
 
## 基本使用
 

<component :is="BaseButton" />

```js
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

```
```json
{
  "name": "Button按钮",
  "itemConfig": {
    "slotName": "",
    "baseView": "BaseButton",
    "text": "按钮",
    "attributes": {
      "type": "primary"
    },
    "style": {},
    "class": {},
    "children": [],
    "methods": {}
  }
}
```