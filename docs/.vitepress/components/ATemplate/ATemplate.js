import {ref, reactive} from 'vue'
import {setConfigId} from 'vite-code'
import jsonData from './ATemplate.json'

export function useCurrentHook() {
  // 视图配置
  const config = ref(setConfigId(jsonData.viewConfig))

  // 数据集
  const data = reactive({
    buttonText: "打开弹窗",
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
