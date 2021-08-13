const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req,res)=>{

})
server.on('request',(req,res)=>{
    // 配置不同路径
    if (req.url==="/") {
      let fruit = [
        {
          name:'苹果',
          price:300
        },
        {
          name:'梨子',
          price:100
        },
        {
          name:'西瓜',
          price:300
        }
      ]
      //响应的内容只能是string或者Buffer(二进制数据)
      //数组转字符串 Json.stringify([])----'[]';Json.parse('[]')---[]
      //数组转字符串 Json.stringify(数组名)
      res.end('首页'+JSON.stringify(fruit))
      
    }else if(req.url==='/login'){
      res.end('登陆页面')
    }else{
      res.end('404,不存在该网页')
    }

})
server.listen(port,hostname,()=>{
  console.log('服务器已经启动');
})




