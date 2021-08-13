
const http = require('http')
const hostname = '127.0.0.1'
const port = 5000

const server = http.createServer((req,res)=>{
  
})
server.on('request',(req,res)=>{
  if(req.url==='/'){
    //text/plain朴素文本
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('你好')
  }else if(req.url==='/login'){
    //text/html html 的字符串
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end("<P>你好</P>")
  }else{
    res.end('404，抱歉没有该网页')
  }

  
})
server.listen(port,hostname,()=>{
  console.log('服务器已经启动');
})