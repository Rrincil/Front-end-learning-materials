const fs = require('fs');
//打开hello.text
const fd = fs.openSync("helloSync.text","w");//"helloSync.text"相对路径
console.log(fd);
// 同步文件的写入
fs.writeSync(fd,"hello file system",2)
fs.closeSync(fd)