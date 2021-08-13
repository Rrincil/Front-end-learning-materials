
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req,res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain'), //类容类型:文本
  res.setHeader('charset','utf-8')//字符集默认:utf-8

})
server.on('request',(req,res)=>{
  console.log('请求路径：'+req.url);
  // res.write('你好')
  // res.end()
  // res.setHeader('charset','utf-8')//字符集默认:utf-8
  // res.end('你好')
  
  // 获取客户端的地址和端口号
  console.log('请客户端发给我的地址和端口号：'+req.socket.remoteAddress+req.socket.remotePort);

})
server.listen(port,hostname,()=>{
  console.log('服务器已经启动');
})