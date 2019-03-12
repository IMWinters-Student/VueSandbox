import Adventures from './components/Pages/Adventures.vue'
import Home from './components/Pages/Home.vue'
import Gear from './components/Pages/Gear.vue'
import Team from './components/Pages/AboutUs.vue'
import Error404 from './components/Pages/Error404.vue'

export const routes =[
    { path: '/Adventures', component: Adventures },
    {path: '/Gear', component: Gear }, 
    { path: '', component: Home },
    {path: '/AboutUs', component: Team},
    {path: "*", component: Error404}

];