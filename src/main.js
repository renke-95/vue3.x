//引入得不再是vue构造函数，引入得是一个名为createApp得工厂函数
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
