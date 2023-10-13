<!--
 * @Author: fangteng fangteng@yaomaitong.cn
 * @Date: 2023-02-11 15:48:42
 * @LastEditors: fangteng fangteng@yaomaitong.cn
 * @LastEditTime: 2023-03-22 14:41:39
 * @FilePath: /vite-project/src/App.vue
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
-->
<script setup name="">
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
      <v-baseIndex :item-view="view" :data="data" :actions-fn="actionsFn" :attribute-fn="attributeFn" />
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>
