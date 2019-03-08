import Adventures from './components/Server/Servers.vue'
import Home from './components/Server/ServerStatus.vue'

export const routes =[
    { path: '/Adventures', component: Adventures },
    { path: '', component: Home },

];