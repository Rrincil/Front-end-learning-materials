import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {request} from './network/request'
import installElementPlus from './plugins/element'

createApp(App).use(store).use(router).mount('#app')

// request({
//   url:'/multidata'
// },res=>{
//   console.log(res);
// },err=>{
//   console.log(err);
// })

//第二种封装的使用
// request({
//   base:{
//       url:'/multidata'
//   },
//   success:function(res){
//        console.log(res); 
//   },
//   failture:function(err){
//        console.log(err);
//   }
// })

//第三种封装的使用
request({
     url:'/multidata'
}).then(res=>{
   console.log(res);
}).catch(err=>{
   console.log(err);
})