const express = require('express')
//创建app
const app = express()
//配置静态资源路径；

app.use(express.static('./public/'))
app.get('/',(req,res)=>{
  // res.send('首页')
  res.send('首页')
})

//配置登陆页面
app.get('/login',(req,res)=>{
  
  // res.send('这是登陆页面')
})

//配置解析表单post请求数据
app.get('/biaodan',(req,res)=>{
  res.send('表单')
  // res.render('biaodan.html')
})


app.post('/login',(req,res)=>{
  alert('收到表的请求了')
})

app.listen(3000,()=>{
  console.log(this);
  console.log('express is runing');
})