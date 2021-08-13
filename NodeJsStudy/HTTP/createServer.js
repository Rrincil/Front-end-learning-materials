//*引入模块
const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;

//1.使用http.createServer()方法创建一个web服务器，返回一个Server实例
const server = http.createServer((req,res)=>[


  // 状态码200 OK
  res.statusCode=200,
  // 设置编码
  // res.setHeader('Content-Type','text/plain'), //类容类型:文本
  // res.setHeader('charset','utf-8'),//字符集默认:utf-8
  // res.write('hello NodeJs'),
  // //结束请求
  // res.end()
])


//2.接收请求：server.on('request',()=>{})
server.on('request',(req,res)=>{
  console.log('收到客户端的请求了');
  console.log('请求地址是；'+req.url);//请求地址req.url
  res.write('你好')
  res.end();
})

//3.
server.listen(port,hostname,()=>{
  console.log('服务器已启动')
})