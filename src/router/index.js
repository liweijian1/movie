import VueRouter from 'vue-router'
import Vue from 'vue'
import login from './../components/view/login'
import firstPage from '../components/view/firstPage'

Vue.use(VueRouter)

const routes = [
    {path:'/',component:login},
    {path:'/firstPage',component:firstPage}
]

const router = new VueRouter({
    routes
})

export default  router