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
