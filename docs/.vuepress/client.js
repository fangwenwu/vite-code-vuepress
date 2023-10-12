import { defineClientConfig } from '@vuepress/client'

import van from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

// 导入组件库
import { createComponent } from 'vite-code'

const VUI = createComponent({
  components: [
    {
      name: 'BaseButton',
      component: () => import('./components/BaseButton/index.vue'),
    }
  ]
})

export default defineClientConfig ({
  enhance({ app }){
    // app 是由 createApp 创建的 Vue 应用实例
    app.use(van)
    app.use(VUI)
  }
})