const http = require('http')
const options = {
  hostname:'www.lezijie.com',
  port:'80',//不写默认80端口
  method:'post'
}
const req = http.request(options,(res)=>{
  res.on('data',(chunk)=>{
    console.log(chunk.toString());
  })

})
req.end()