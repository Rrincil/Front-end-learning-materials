# 一.对线程和进程的理解
## 1.1进程：
- 是系统进行资源分配和调度的基本单位
- 进程负责为程序运行提供特定的环境
## 1.2线程
- 线程是计算机中的最小单位，线程负责执行进程中的程序
## 1.3单线程
- js单线程，Node单线程
## 1.4多线程
- 客户端进来一个请求就创建一个线程
= Java多线程
# 二.Node搜索包的流程
- 逐级向上一层查找，直至该磁盘根目录
# 三.Buffer缓冲区
- 客户端以二进制发送的请求存在Buffer中
- 服务器响应时发送的数据也存在Buffer中
## 3.1.Buffer缓冲区理解重点
- 数组不能存储二进制文件，而Buffer就是专门用来存储二进制的
- Buffer的结构和数据很像，操作方法也和数组类似
- Buffer中一个元素就表示内存中的一个字节(1byte)
- 实际上Buffer中的内存不是通过js分配的，而是在底层通过c++申请的
- 也就是我们可以通过Buffer来创建内存中的空间
> Buffer的大小一旦确定就不能修改,Bufffer实际上是对底层内存直接操作，分配的是连续的一段存储空间，不能改变（如果改变可能分配不连续的空间，性能不好）
> 在Bufffer中存储的都是二进制数据，但是显示时都是以16进制的两位数的形式显示
> 在Buffer中每个元素的范围都是从00--ff(十进制是0-255)(二进制是00000000-----11111111)
> 一个二进制中的0或1在计算机中称为一位(1bit)
> 8bit = 1byte(字节):八位二进制就是一字节
> 所以Buffer中的1个元素是八位二进制，占用内存1字节(一个英文字母是1byte，一个汉字是3byte)
> 1024byte = 1kb-------(bit,byte,kb,mb,gb,tb)
```javascript
const str = '你好 Buffer'

//将一个字符串保存在Buffer中
const Buf = Buffer.from(str);
console.log(Buf.length); //str占用内存大小 Buffer中一个元素1byte,一个汉字是3byte,因此占用Buffer 13个元素，占用内存13字节
console.log(str.length);//数组的长度
```
## 3.2.Buffer的使用
- Buffer不需要引入模块，直接使用即可
- 创建一个指定大小的Buffer，Buffer.alloc(10)
- 只要数字在控制台或者页面输出都为10进制，控制台打印0xaa为：170
- 转换进制方法toString(进制数),toString(16),转换为16进制
- 转换字符串方法toString()
```javascript
//创建一个指定大小的Buffer
const Buf2 = Buffer.alloc(10)//创建10字节的Buffer
console.log(Buf2);
//通过索引来操作Buffer中的元素
Buf2[0] = 88
Buf2[1] = 255  
Buf2[2] = 556  //(556--转二进制--->1000101100（超出8位只取后8位即00101100----转16进制-->2c）)(2C--转10进制-->44)
Buf2[3] = 0xaa
Buf2[10] = 88  //超出Buffer长度不做分配也不报错
console.log(Buf2);


console.log('控制台打印0xaa为：'+Buf2[3]);//只要数字在控制台或者页面输出都为10进制，控制台打印0xaa为：170
//转换255为16进制：2c
console.log('转换255为16进制：'+Buf2[2].toString(16));//转换进制方法toString(),toString(16),转换为16进制


```
## 3.3.Buffer.allocUnsafe(size)方法
- 可能存在泄露数据，不安全
- 以这种方式创建的 Buffer 实例的底层内存不会被初始化。 新创建的 Buffer 的内容是未知的，可能包含敏感的数据。 使用 Buffer.alloc() 来用零初始化 Buffer 实例。
```javascript
const buf = Buffer.allocUnsafe(10);

console.log(buf);
// 打印（内容可能会有所不同）: <Buffer a0 8b 28 3f 01 00 00 00 50 32>

buf.fill(0);

console.log(buf);
// 打印: <Buffer 00 00 00 00 00 00 00 00 00 00>
```
# 四.fs文件系统
- file system 文件系统通过Node操作系统中的文件
- 使用文件系统需要引入fs模块，fs是核心模块，直接引用不需要下载
## 4.1.文件写入的步骤
- (1)打开(创建)文件
- (2)向文件中写入内容
- (3)保存并关闭文件(如果不关闭文件，服务器打开多个文件会导致崩溃)
> 同步方法名与异步方法名相同，但是同步方法名多一个Sync，例如同步---fs.open(),异步---fs.openSync()
> 另外异步方法参数多一个回调函数
## 4.2.同步文件的操作
- 同步方法有返回值，异步方法没有
### 4.2.1.同步文件的打开fs.openSync(path[, flags[, mode]])
- flags；打开要做的操作类型如：r--只读的，w--可写的
- mode:设置文件的操作权限(一般不传)
- 返回值：该方法会返回一个文件描述符作为结果，我们可以通过该描述符来对文件进行各种操作
### 4.2.2.同步文件的写入fs.writeSync(fd, string[, position[, encoding]])
- fd；打开(创建)的文件
- string：要写入的内容
- position：写入的起始位置
- encoding：写入的编码,默认是utf-8
### 4.2.3.fs.closeSync(fd)
- fd:打开(创建)的文件
```javascript
const fs = require('fs');
//打开hello.text
const fd = fs.openSync("hello.text","w");//"hello.text"相对路径
console.log(fd);
// 同步文件的写入
fs.writeSync(fd,"hello file system",2)
fs.closeSync(fd)
```
## 4.3.异步文件的操作
- 异步方法无返回值，只有同步方法有返回值
- 异步调用的方法都是通过回调函数的参数返回的
- 回调函数有2个参数：(1)err 错误对象(如果没有错误则为none) (2)fd：文件的描述符
### 4.3.1.异步打开文件fs.open(path[, flags[, mode]], callback)
- callback；回调函数(err,fd)=>{}
- 该回调函数有2个参数：(1)err 错误对象(如果没有错误则为none) (2)fd：文件的描述符
### 4.3.2.异步写入文件fs.write(fd, string[, position[, encoding]], callback)
- fd:打开文件传入的fd参数即文件描述符
- callback：回调函数(err,written,string,callback)=>{}
- 该回调函数有3个参数：(1)err 错误对象(如果没有错误则为none) (2)written：指定传入的字符串写入多少字节 (3)string:写入的内容(4)回调函数back
### 4.3.2.关闭文件fs.close(fd[, callback])
- callback；回调函数(err)=>{}
```javascript
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
```
# 五.node核心模块之OS，path
- OS(operating system )用来获取操作系统相关信息
- path--用来获取操作路径的
- 核心模块直接引入
```javascript
const path = require('path')
//用来获取操作路径的

//extname:extion name(扩展名)
console.log(path.extname('c:/a/b/c/hello.text'));


const os = require('os')
// 获取当前机器的基本信息
// console.log(os.cpus());
// memory 获取内存大小 单位字节
console.log(os.totalmem());
```
# 六.服务器请求响应对象
- 服务器响应的内容只能是string或者Buffer(二进制数据
- 端口号用来定义具体的应用程序(一对一)范围(0-65536)
## 6.1.服务器的作用：
- 提供对数据的服务
- 发送请求
- 接收请求
- 处理请求
- 给个反馈(发送响应)
## 6.2.http.createServer((req,res)=>{})创建服务器
- 引入http核心模块 const http = require('http');
### 6.2.1.使用http.createServer((req,res)=>{})方法创建一个web服务器，返回一个Server实例
### 6.2.2.接收请求：server.on('request',(req,res)=>{})
- 注册request请求事件
- 当服务器收到请求之后，会触发服务器的request请求事件，然后执行回调函数
- 请求地址req.url
- res.write()方法，可以用来给客户端发送响应数据，write()方法可以使用多次，但最后一定要用res.end()方法来结束响应
- 可以直接在end()方法中发送数据res.end('你好')代替res.write('你好')
### 6.2.3.绑定端口号启动服务器server.listen(port,hostname,()=>{}])
### 6.2.4.获取客户端的地址和端口号req.socket.remoteAddress+req.socket.remotePort
```javascript

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
  
  //获取客户端的地址和端口号
  console.log('请客户端发给我的地址和端口号：'+req.socket.remoteAddress+req.socket.remotePort);

})
server.listen(port,hostname,()=>{
  console.log('服务器已经启动');
})
```
### 6.2.5配置不同路径
#### 6.2.5.1.根据不同的客户端请求路径，服务器返回不同的响应结果
- (1)服务器获取客户端请求的路径：req.url获取的是端口号之后的url以/开头
- (2)服务器判断路径处理响应
#### 6.2.5.2.数组转字符串的方法：
- Json.stringify(数组名)
- 响应的内容只能是string或者Buffer(二进制数据)
```javascript
server.on('request',(req,res)=>{
  console.log('请求路径：'+req.url);
  // res.setHeader('charset','utf-8')//字符集默认:utf-8

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

```
### 6.2.6.响应内容content-type
- http://tool.oschina.net 中的HTTP Mime-type可以查询content-type类型,ctrl+f输入文件后缀查询如.html .text
- 服务端默认发送的数据,其实是Utf-8编码的内容
- 浏览器在不知道服务器响应内容的编码情况下会按照当前操作系统的默认编码去解析
- 中文操作系统默认 gbk
- 所以需要配置content-type告知浏览器(客户端)：服务器发送的数据类型
#### `*方法`:res.setHeader('Content-Type','text/plain;charset=utf-8')
- plain (朴素的，普通的)text/plain朴素文本
- text/html html 的字符串
- 图片一般不用指定编码，字符需要
```javascript

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
```
### 6.2.7.服务器创建html页面
- 把文件中的html类型的字符串解析出来
#### `步骤`：
- 引入fs，http模块，使用fs.readFile('./resource/login.html',(err,data)=>{}方法
- 修改html中的内容不用重启服务器，随时在动态读取文件
```javascript
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
```
## 6.4.http.incomingMessage
- http.incomingMessage是HTTP请求的信息，一般由http.server的request事件发送，并作为第一个参数传递，http请求一般分为两部分：请求头，请求体
## 6.4.http请求方法http.request(url[, options][, callback])
- options:{hostname:'',port:'80',method:'post或者get'}port默认80

# 使用art-template
- art-template不仅可以在浏览器中使用，还可在node中使用
- 在html文件中引用art-template
```javascript
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="../../node_modules/art-template/lib/template-web.js"></script>
  <title>art-template</title>
</head>
<body>
  

  <script type="text/template" id="tpl">
    hello {{name}}
  </script>
  <script>
    const ret = template('tpl',{
      name:'jack'
    })
    console.log(ret);
  </script>
</body>
```
# express