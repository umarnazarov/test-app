import { createApp } from 'vue'

import router from '@/router'
import App from './App.vue'

import '@/assets/global.scss'

import initLayouts from './common/layouts'
import initPlugins from './plugins'
import initModules from './modules'

import InputText from '@/common/components/input-text.vue'

const app = createApp(App)

initLayouts(app)
initPlugins(app)
initModules({ app, router })

app.component('InputText', InputText)

app.use(router).mount('#app')