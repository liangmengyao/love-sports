import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'normalize.css/normalize.css'
import '@assets/iconfont/iconfont.css'
import '@/styles/index.scss'
import 'animate.css';


const app = createApp(App)
app.use(Antd)
app.mount('#app')