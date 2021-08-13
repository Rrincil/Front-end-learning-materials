const express = require('express')
//创建app
const app = express()
//配置静态资源路径；
//以/开头时，去./public/目录中寻找资源------http://localhost:3000/index.html
// app.use('/',express.static('./public/'))
app.use(express.static('./public/'))
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