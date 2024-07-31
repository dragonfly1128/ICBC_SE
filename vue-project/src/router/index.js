//创建路由实例
import { createRouter, createWebHashHistory } from "vue-router"
import Index from '../view/index.vue'
import Lucky from '../view/Lucky.vue'
import lucky1 from "../view/lucky1.vue"
import Disney from "../view/disney.vue"



//1.创建路由规则

const routes = [{
    path: '/index',
    name: 'index',
    component: Index
},{
    path: '/',
    name: 'index',
    component: Index
},{
    path: '/lucky',
    name: 'lucky',
    component: Lucky
},
{
    path: '/lucky1',
    name: 'lucky1',
    component: lucky1
},
{
    path: '/disney',
    name: 'disney',
    component: Disney
}]
//2.创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
//创建主页组件
