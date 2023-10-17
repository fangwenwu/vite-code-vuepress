
import { defineConfig } from 'vitepress'

import nav from './config/navbar'
import sidebar from './config/sidebar'



export default defineConfig({
  lang: 'zh-CN',
  title: 'vite-code',
  description: '这是我的第一个 VuePress 站点',
  base: '/vite-code-vuepress/', // 这是部署到github相关的配置
  markdown: {
    code: {
      lineNumbers: false // 代码块显示行号
    }
  },
  themeConfig: {
    // 在这里进行配置
    nav,
    sidebar
  }
})
