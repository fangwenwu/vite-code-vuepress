import Layout from "vitepress/theme"
import { createPinia } from 'pinia'
import van from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';



export default {
  extends: Layout,
  async enhanceApp({ app }) {
    const pinia = createPinia()
    if (!import.meta.env.SSR) {
      const { createComponent } = await import('vite-code')
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
      app.use(pinia)
      app.use(van)
      app.use(VUI)
    }
  }
}
