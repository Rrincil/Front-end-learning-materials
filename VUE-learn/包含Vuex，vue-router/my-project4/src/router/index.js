import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import user from '../components/user.vue'
const user = ()=>import('../components/user')
const user1 = ()=>import('../components/user1')
const user2 = ()=>import('../components/user2')
// const taber = ()=>import('../components/taber/taber')
const Home = ()=>import('../views/Home')
const routes = [
  {
    path: '/Home',
    
    name: 'Home',
    meta:{
      title:'HOME'
    },
     //路由独享守卫
      //  router.beforeEach((to, from, next) => {
        
      //   next();
        
      // })
    component: Home
  },
  {
    path: '/user',
    name: 'user',
    component:user,
    //创造对应的子组件，并在路由映射中配置对应的子路由使用children[{},{}]
    children:[
      //默认路径
      {
        path:'',
        redirect: 'user1'
      
      },
      {
        path:'/user1',
        name:'user1',
        //document.title='用户界面1'
        meta:{
          title:'用户界面1'
        },
        component:user1
      },
      {
        path:'/user2',
        component:user2
      },
      // {
      //   path:'/taber',
      //   component:taber
      // },
 
    ]
  },
  //配置动态路由
  {
    path:'/user/:a',
    component:user
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
//前置钩子（hook）全局路由监听
router.beforeEach((to, from, next) => {
  //路由嵌套用不了
  document.title=to.matched[0].meta.title
  //next下一步必须写
  next();
  
})
//后置钩子(hook)（afterEach）不需要主动调用next()函数
// router.afterEach( route => {
//   document.title=to.matched[0].meta.title
// })
export default router
