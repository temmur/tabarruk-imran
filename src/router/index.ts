import {createRouter, createWebHistory} from 'vue-router'

import PHome from '@/views/PHome.vue'
import PAbout from '@/views/PAbout.vue'
import PProducts from '@/views/PProducts.vue'
import LDefault from '@/layouts/LDefault.vue'

const routes = [
   {
    path: "/",
    name: 'LDefault', 
    component: LDefault,
    children: [
         {
        path: '/',
        name: 'home', 
        component: PHome
    }, 
    {
        path: '/about',
        name: 'about', 
        component: PAbout
    }, 
    {
        path: '/products',
        name: 'products', 
        component:()=> import('@/views/PProducts.vue')
    }
    ]
   }
]


const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router