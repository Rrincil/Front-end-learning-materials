const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1'
const port = 5000

const server = http.createServer((req,res)=>{
  
})
server.on('request',(req,res)=>{
  if(req.url==='/'){
    fs.readFile('./resource/index.html',(err,data)=>{
      if(!err){
        //data默认是二进制数据，可以通过toString()转为我们可识别的字符串
        //res.end()方法支持两种类型;1.二进制，2.字符串
        res.end(data)
      }else{
        res.setHeader('Content-Type','text/plain;charset=utf-8')
        res.end("文件读取失败")        
      }

    })
  }else if(req.url==='/login'){
    fs.readFile('./resource/login.html',(err,data)=>{
      if(!err){
        res.end(data)
      }else{
        res.setHeader('Content-Type','text/plain;charset=utf-8')
        res.end('文件读取失败')
      }
    })
  }else{
    res.end('404，抱歉没有该网页')
  }

  
})
server.listen(port,hostname,()=>{
  console.log('服务器已经启动');
})