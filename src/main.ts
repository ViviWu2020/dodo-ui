import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Dodo from './components/Dodo.vue'
import Dodo2 from './components/Dodo2.vue'


const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Dodo },
        { path: '/xxx', component: Dodo2 },
    ]

})

const app = createApp(App)
app.use(router)
app.mount('#app')
