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
main.js
import { createApp } from 'vue'
// 引入组件
import { createComponent } from 'vite-code'
// 导入自定义的基础组件
const VUI = createComponent({
  // 组件路由集合
  components: [     
    {
      // 组件路由名称，与json数据里的baseView对应
      name: 'BasePage', 
      // 组件导入路径    
      component: () => import('.././components/BasePage/BasePage.vue'),
    },
    {
      name: 'BaseButton',
      component: () => import('.././components/BaseButton/index.vue'),
    },
    {
      name: 'BaseToast',
      component: () => import('.././components/BaseToast/index.vue'),
    }
  ]
})

const app = createApp(App)
// 注册组件
app.use(VUI)

```

```vue
app.vue
<script setup>
  function isLocal() {
    // 是否是本地开发
    return true
  }
</script>
<template>
  // vite-code配置组件
  <template v-if="isLocal()">
    <vPreview />
    <vCodeMirror />
  </template>

  // 你自己的业务
  <RouterView v-if="isRouterAlive" />
</template>

```
## 使用组件
创建一个 ATemplate文件夹，文件夹中创建ATemplate.vue，ATemplate.js，ATemplate.json文件，引入BasePage，BaseButton组件。更多请参考 [组件介绍](/componentDocs/upgrade/Component.md)

效果:
<template v-if="ATemplate" >
  <ATemplate />
</template>


1. ATemplate.vue 固定的页面格式

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
2. ATemplate.js 固定的js属性 config、data、attributeFn、actionsFn，setConfigId方法;
<br/>
<br/>
setConfigId：为页面视图配置提供唯一标识，视图配置中，每个组件会生成一个onlyId属性，通过onlyId会生成一个pathId，只在开发过程中使用；
<br />
<br />
config：页面视图配置，来源是页面json文件中的viewConfig属性，viewConfig里的数据来源是每个组件json文件中的itemConfig属性;
<br />
<br />
data: 数据集，为视图配置提供初始化数据；下面视图配置中的Toast组件中的value属性，可以通过text: "getValue: data.isShow"来获取data.isShow的值；
<br />
<br />
attributeFn：属性方法，为视图配置提供初始化数据；下面视图配置中Button组件中的text属性，可以通过text: "function: getButtonText"
<br />
<br />
actionsFn：事件方法，为视图配置中需要的组件提供对应的事件方法；下图视图配置中Button组件中的click事件，可以通过methods: {"click": "onClick"}将按钮点击事件绑定到actionsFn中的onClick方法上；

``` js
import {ref, reactive} from 'vue'
import {setConfigId} from 'vite-code'
import jsonData from './ATemplate.json'

export function useCurrentHook() {
  // 视图配置
  const config = ref(setConfigId(jsonData.viewConfig))

  // 数据集
  const data = reactive({
    // 是否显示toast弹窗
    isShow: false,
  })

  // 属性方法
  const attributeFn = {
    getButtonText: () => {
      return data.isShow ? '关闭弹窗' : '打开弹窗'
    }
  }
  // 事件方法
  const actionsFn = {
    onClick: (options) => {
      data.isShow = !data.isShow
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

3. ATemplate.json 固定的json结构 更多请参考 [组件介绍](/componentDocs/upgrade/Component.md)

``` json
{
  // 组件名称
  "name": "ATemplate",
  // 视图配置
  "viewConfig": [
    {
      // 组件对应的路由名称
      "baseView": "BasePage",
      // 组件样式
      "style": {
        "padding": "20px"
      },
      // 子组件集合，数据来源是组件json中的itemConfig属性
      "children": [
          // Button组件json中的itemConfig属性
          {
              // 插槽名称，对应的是父组件中的一个具名插槽，比如父组件有一个插槽是title，要把这个组件放到这个插槽里，slotName就是title
              "slotName": "",
              // 组件对应的路由名称
              "baseView": "BaseButton",
              // 组件内部需要的字段，可自定义
              "text": "function: getButtonText",
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
          },
          // Toast组件json中的itemConfig属性
          {
            "slotName": "",
            "baseView": "BaseToast",
            "text": "Toast 内容",
            "attributes": {
            },
            "style": {},
            "class": {},
            "children": [],
            // 双向绑定
            "value": "getValue: data.isShow",
            // 双向绑定data里的对应字段
            "modelValue": "data.isShow",
            "methods": {
            }
          }
      ]
    }
  ]
}

```
