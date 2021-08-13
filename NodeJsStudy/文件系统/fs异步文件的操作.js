const fs = require("fs")
//打开异步文件fs.open(path[, flags[, mode]], callback)
fs.open("hello.text","w",(err,fd)=>{
  //判断是否出错
  if(!err){
    console.log('打开文件成功');
    //如果没有出错，则对文件写入
    fs.write(fd,'我是异步操作写入文件的',(err,fd)=>{
      if(!err){
        console.log('内容写入成功');
      }
      //关闭文件
      fs.close(fd,(err)=>{
        if(!err){
          console.log('关闭文件成功');
        }
      })
    })

  }else{
    console.log(err);
  }
  
})
console.log('我是后续需要执行的代码');
//先执行后续代码，最后执行异步方法中的回调函数




/*
控制台输出:
我是后续需要执行的代码
打开文件成功
内容写入成功
hello.text:
我是异步操作写入文件的
*/

