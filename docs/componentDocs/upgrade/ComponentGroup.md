## 介绍

组合组件，意思是多个组件组合成一个组件，这个组件的属性由子组件的属性需求自定义。

## 示例
``` vue
<!-- 搜索组件 -->
<script setup name="Search">
import { useConfigStore } from 'vite-code'

import { useCurrentHook } from './index.js'

const currentHook = useCurrentHook()
const { data, config, attributeFn, actionsFn } = currentHook


</script>

<template>
  <div>
    <template v-for="view in config" :key="view.onlyId+view.updateId">
      <v-baseIndex :item-view="view" :data="data" :actions-fn="actionsFn" :attribute-fn="attributeFn" />
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>

```

``` js
import {ref, reactive} from 'vue'
import {setConfigId} from 'vite-code'
import jsonData from './index.json'

export function useCurrentHook() {
  // 视图配置
  const config = ref(setConfigId(jsonData.viewConfig))

  // 数据集
  const data = reactive({
  })

  // 属性方法
  const attributeFn = {
    
  }
  // 事件方法
  const actionsFn = {
    
  }

  return {
    data,
    config,
    attributeFn,
    actionsFn
  }

}

```

``` json
{
  "name": "Search",
  "desc": "搜索组件",
  "itemConfig": {
    "keyword": "",
    "type": {},
    "methods": {
    }
  },
  "viewConfig": [
    {
      "baseView": "BaseRow",
      "children": [
        {
          "baseView": "BaseInput",
          "value": "getValue: itemConfig.keyword",
        }
      ]
    }
  ]
}

```