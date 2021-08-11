import axios from 'axios'
import { reject, resolve } from 'core-js/fn/promise'
//第一种封装方法，传三个个参数
// export function request(config,success,fuilture){
//   const inter1 = axios.create({
//     baseurl:'http://123.207.32.32:8000/home',
//     timeout:5000
//    })
//   //发送真正的网络请求
//    inter1(config).then(res=>{
//      //console.log(res);
//      //回调出去
//      success(res)
//    }).catch(err=>{
//      //console.log(err);
//      fuilture(err)
//    })
// }

//第二种封装方法，只传一个参数
// export function request(config){
//   const inter1 = axios.create({
//     baseurl:'http://123.207.32.32:8000/home',
//     timeout:5000
//    })
//   //发送真正的网络请求
//    inter1(config.base).then(res=>{
//      //console.log(res);
//      //回调出去
//      config.success(res)
//    }).catch(err=>{
//      //console.log(err);
//      config.fuilture(err)
//    })
// }

//第三种封装方法，只传promise方法
// export function request(config){
//   return promise((resolve,reject)=>{
//     const inter1 = axios.create({
//       baseurl:'http://123.207.32.32:8000/home',
//       timeout:5000
//      })
//     //发送真正的网络请求
//      inter1(config).then(res=>{
//        //console.log(res);
//        //回调出去
//         resolve(res)
//      }).catch(err=>{
//        //console.log(err);
//         reject(err)
//      })
//   })
// }

//第四种封装方法，直接return
export function request(config){
 
    const inter1 = axios.create({
      baseurl:'http://123.207.32.32:8000/home',
      timeout:5000
     })
     //1.拦截器
     //1.1请求拦截
    inter1.interceptors.request.use(config=>{
      //请求成功拦截
      console.log(config);
      //1.比如config中的一些信息不符合要求，需要进行修改后发送
      //2.比如每次发送网络请求时，都希望在页面显示一个网络图标，或者加一些动画
      //show()
      //某些网络请求例如登陆时必须携带一些特殊信息(token),拦截检查是否含有特殊信息，如果没有就跳转页面登陆
      
      
      
      
      //拦截掉了config需要返回回去
      return config
    },err=>{
      //请求失败拦截
      console.log(err);
    })


    //1.2响应拦截
    inter1.interceptors.response.use(res=>{
      //响应成功拦截
      console.log(res);      
      //拦截掉了res(结果)需要返回回去
      // return res.data  //返回结果中的data
      return res
    },err=>{
      //响应失败拦截
      console.log(err);
    })



    //2.发送真正的网络请求 
    //返回的promise方法
    return inter1(config)

}