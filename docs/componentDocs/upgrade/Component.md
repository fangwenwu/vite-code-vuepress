# 进阶用法

## 介绍

通过本章节你可以了解到，组件的json结构、vue结构、useBaseHook函数等。


## 组件json结构

组件json结构是组件的配置信息，通过json结构可以配置组件的属性、事件、样式、数据、子组件等，json结构的配置项和组件的属性一一对应，现在以Button组件为例，具体如下：

```json
{
  // 组件名称
  "name": "Button按钮",
  // 组件配置
  "itemConfig": {
    // 插槽名称，对应的是父组件中的一个具名插槽，比如父组件有一个插槽是title，要把这个组件放到这个插槽里，slotName就是title
    "slotName": "",
    // 组件路由名称
    "baseView": "BaseButton",
    // 组件内部需要的字段，可自定义
    "text": "按钮",
    // 组件属性集合
    "attributes": {
      "type": "primary"
    },
    // 组件样式
    "style": {},
    // 组件样式类
    "class": {},
    // 组件子集集合
    "children": [],
    // 组件事件集合
    "methods": {
      // 点击事件映射为，actionsFn中的onClick方法
      "click": "onClick"
    }
  }
}

```
## 组件的vue结构
```vue
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

<script setup name="Button">
import jsonData from './index.json'
import { useBaseHook } from 'vite-code'

const props = defineProps({
  // 组件json结构
  itemView: {
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['update:modelValue', 'onActivate'])
/**
 * initView 初始化组件json数据
 * getRef 获取组件实例，它会触发名称为getRef的事件，通过methods: {getRef: "onGetRef"}，可绑定到actionsFn中定义的onGetRef方法
 * getMethods 组件事件，通过methods: {组件事件: "actionsFn中方法"}，可将组件事件与actionsFn中定义的方法绑定
 * 
*/
const { initView, getRef, getMethods } = useBaseHook(props, emit, jsonData)

</script>

```

## 组件的useBaseHook函数
useBaseHook函数中封装了一些通用属性：
<br /><br />
value: 双向绑定的值。
<br /><br />
initView: 组件json数据初始化后的数据。
<br /><br />
getRef: 获取组件实例，它会触发名称为getRef的事件，通过methods: {getRef: "onGetRef"}，可绑定到actionsFn中定义的onGetRef方法。
<br /><br />
getMethods: 组件事件，通过methods: {组件事件: "actionsFn中方法"}，可将组件事件与actionsFn中定义的方法绑定。
<br /><br />
onActivate: 自定义组件事件。
<br /><br />
onUpdateModelValue：自定义双向绑定事件。
<br /><br />
具体使用如下：

``` vue
<template>
  <van-xxx 
    :ref="getRef"  
    v-bind="initView.attributes"
    :style="initView.style"
    :class="initView.class"
    :costume-attr="initView.costumeAttr"   // 自定义需要的属性
    v-model="value"
    v-model:custom="custom"           // 双向绑定自定义属性
    v-on="getMethods"
  >
    <div @click="onClick("11")">点击</div>
  </van-xxx>
</template>

<script setup>
import jsonData from './index.json'
import { useBaseHook } from 'vite-code'

const props = defineProps({
  itemView: {   // 组件itemConfig数据
    type: Object,
    default: () => ({})
  }
})
// update:modelValue用于处理双向绑定；onActivate用于处理自定义组件事件
const emit = defineEmits(['update:modelValue', 'onActivate'])

// props, emit, jsonData固定结构，必传
const { 
  value, 
  initView, 
  getRef, 
  getMethods, 
  onActivate, 
  onUpdateModelValue } = useBaseHook(props, emit, jsonData)

// 组件自定义的双向绑定属性
const custom = computed({
  get() {
    return initView.value.custom
  },
  set(val: any) {
    onUpdateModelValue({ key: 'custom', value: val, mapKey: 'modelCustom' })
  }
})

// 组件自定义的事件
onClick(val) {
  console.log(val)  // 11
  // 在视图配置中methods: {onCustom: "actionsFn中方法"}，
  // 可将组件事件与actionsFn中定义的方法绑定。
  onActivate("onCustom", val)
}

</script>

```
```json
{
  "name": "xxx组件",
  "itemConfig": {
    "slotName": "",
    "baseView": "BaseXxx",
    "attributes": {
    },
    "value": "getValue: data.value",
    "modelValue": "data.value",
    // 组件自定义双向绑定属性，根据业务或组件需求定义
    "custom": "getValue: data.custom",  
    // 组件自定义双向绑定属性的映射，custom与data里的custom绑定
    "modelCustom": "data.custom",       
    // 组件自定义属性，根据业务或组件需求定义
    "costumeAttr": [],            
    "style": {},
    "class": {},
    "children": [
    ],
    "methods": {
      "onCustom": "actionsFn中方法"
    }
  }
}

```

