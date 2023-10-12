import { defineUserConfig, defaultTheme } from 'vuepress'

import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from'@vuepress/utils'

import navbar from './config/navbar'
import sidebar from './config/sidebar'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  base: '/', // 这是部署到github相关的配置
  markdown: {
    code: {
      lineNumbers: false // 代码块显示行号
    }
  },
  theme: defaultTheme({
    // 在这里进行配置
    navbar,
    sidebar
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
  ]
})
