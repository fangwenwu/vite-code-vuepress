<script setup>

  import { onMounted,shallowRef } from 'vue'
  const ATemplate = shallowRef(null)
  onMounted(() => {
    import('../.vitepress/components/ATemplate/ATemplate.vue').then((module) => {
      ATemplate.value = module.default
    })
  })

</script>


# 快速上手

## 介绍
通过本章节您可以了解 vite-codes 的安装方法和基本使用姿势。
## 安装
### 通过npm安装

```bash
npm install vite-codes --save
```

### 引入组件

下面是使用 vite-code 组件的最佳示例：

```js
import { createApp } from 'vue'
// 引入组件
import { createComponent } from 'vite-code'
// 导入自定义的基础组件
const VUI = createComponent({
  components: [
    {
      name: 'BasePage',
      component: () => import('.././components/BasePage/BasePage.vue'),
    },
    {
      name: 'BaseButton',
      component: () => import('.././components/BaseButton/index.vue'),
    }
  ]
})

const app = createApp(App)
// 注册组件
app.use(VUI)

```
## 使用组件
创建一个 ATemplate文件夹，文件夹中创建ATemplate.vue，ATemplate.js，ATemplate.json文件，引入BasePage，BaseButton组件。

效果:
<template v-if="ATemplate" >
  <ATemplate />
</template>


1. ATemplate.vue

```vue
<script setup name="ATemplate">
import { useConfigStore } from 'vite-code'

import { useCurrentHook } from './ATemplate'

const currentHook = useCurrentHook()
const { data, config, attributeFn, actionsFn } = currentHook

// 模版配置
const configStore = useConfigStore()
configStore.set('data', data)
configStore.set('config', config)
configStore.set('attributeFn', attributeFn)
configStore.set('actionsFn', actionsFn)
configStore.set('pageName', 'ATemplate')

</script>

<template>
  <div>
    <template v-for="view in config" :key="view.onlyId+view.updateId">
      <vBaseIndex :item-view="view" :data="data" :actions-fn="actionsFn" :attribute-fn="attributeFn" />
    </template>
  </div>
</template>

```
2. ATemplate.json
``` js
import {ref, reactive} from 'vue'
import {setConfigId} from 'vite-code'
import jsonData from './ATemplate.json'

export function useCurrentHook() {
  // 视图配置
  const config = ref(setConfigId(jsonData.viewConfig))

  // 数据集
  const data = reactive({
    count: 0,
  })

  // 属性方法
  const attributeFn = {

  }
  // 事件方法
  const actionsFn = {
    onClick: (options) => {
      data.count++
    }
  }

  return {
    data,
    config,
    attributeFn,
    actionsFn
  }

}

```

3. ATemplate.json

``` json
{
  "name": "ATemplate",
  "viewConfig": [
    {
      "baseView": "BasePage",
      "style": {
        "padding": "20px"
      },
      "children": [
          {
              "slotName": "",
              "baseView": "BaseButton",
              "text": "getValue: data.count",
              "attributes": {
                  "type": "primary"
              },
              "style": {},
              "class": {},
              "children": [],
              "methods": {
                "click": "onClick"
              }
          }
      ]
    }
  ]
}

```
