const str = '你好 Buffer'

//将一个字符串保存在Buffer中
const Buf = Buffer.from(str);
console.log(Buf.length); //str占用内存大小 Buffer中一个元素1byte,一个汉字是3byte,因此占用Buffer 13个元素，占用内存13字节
console.log(str.length);//数组的长度

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


//Buffer.allocUnsafe(size)方法
const buf = Buffer.allocUnsafe(10);

console.log(buf);
// 打印（内容可能会有所不同）: <Buffer a0 8b 28 3f 01 00 00 00 50 32>

buf.fill(0);

console.log(buf);
// 打印: <Buffer 00 00 00 00 00 00 00 00 00 00>
