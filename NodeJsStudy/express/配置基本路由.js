const express = require('express')
//创建app
const app = express()
//配置路径:app.get('路径',(req,res)=>{})方法
//配置首页
app.get('/',(req,res)=>{
  // res.send('首页')
  res.send('首页')
})

//配置登陆页面
app.get('/login',(req,res)=>{
  
  res.send('这是登陆页面')
})



app.listen(3000,()=>{
  console.log(this);
  console.log('express is runing');
})