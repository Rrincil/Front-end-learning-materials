const template = require('../node_modules/art-template')
const fs = require('fs')
//初始抽离模板
const moban = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>art-template</title>
</head>
<body>
  <P>你好{{name}},'{{name}}'</P>
</body>
</html>
`


// template.render('模板字符串',替换对象)
// const a1 =  template.render('你好{{name}},'{{name}}'',{
//   name:'jack'
// })
// const a2 =  template.render(moban,{
//   name:'jack'
// })
// console.log(a1);
// console.log(a2);


//终极抽离模板，把模板中内容提出到moban.html中，再使用fs.readFile('./public/moban.html',(err,data)={}
//使用toString()将fs.readFile中的data转换成字符串
fs.readFile('./public/moban.html',(err,data)=>{
  if(!err){
    //默认data读取的是二进制数据
    const a3 =  template.render(data.toString(),{
      name:'jack'
    })
   console.log(a3);
  }else{
    console.log(err);
  }
})