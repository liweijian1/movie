import VueRouter from 'vue-router'
import Vue from 'vue'
import login from './../components/view/login'
import Home from '../components/view/firstPage'

Vue.use(VueRouter)

const routes = [
    {path:'/',component:login},
    {path:'/home',component:Home,redirect:'/movieFirstPage',
     children:[
         {path:'/movieFirstPage',component:()=>import('../components/view/pages/allInfo/firstPage.vue')},
         {path:'/rencentUpdate',component:()=>import('../components/view/pages/recentUpdate/rencentUpdate.vue')},
         {path:'/hot',component:()=>import('../components/view/pages/hot/hot.vue')}
     ]
    }
]

const router = new VueRouter({
    routes
})

export default  router