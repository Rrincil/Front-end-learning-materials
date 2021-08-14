const mongoose = require('mongoose');
//1.连接数据库
//指定连接的数据库不需要存在,当你插入第一条数据库的时候就会自动创建出来
mongoose.connect('mongodb://localhost:27017/test2', {useNewUrlParser: true, useUnifiedTopology: true});

//2.设计集合结构
const { Schema } = mongoose;


const blogSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

//2.设计有约束的表结构
//约束的目的是为了保证数据的完整性，不要有脏数据
const userSchema = new Schema({
  name:{
    type:String,
    required:true  //必须有的
  }
});


//3.将文档数据发布为模型Creating a model
//mongoose.model方法就是用来将一个构架发布为model
//第一个参数：传入一个大写名词单数字字符串用来表示数据库名-
//                   mongoose会自动的将大写的名词字符串 生成 小写复数 的集合名称
//                   例如将User 最终会生成users集合名称
//第二个参数 ：构架Schema

//返回值：模型构造函数
const User = mongoose.model('User', userSchema);


//4.当我们有了这个模型构造函数后，就可以使用这个构造函数对users集合中的数据进行 增删改查

//新增数据
const admin = new User({
  name:'admin',
  password:'123456',
  email:'admin@admin.com'

})
admin.save((err,ret)=>{
  if(!err){
    console.log(ret);//保存的数据
  }else{
    console.log('保存失败');
  }
})

//查询数据

//查询所有
User.find({
  name:'张三'
},(err,ret)=>{
  if(!err){
    console.log(ret)
  }else{
    console.log('查询失败');
  
  }
})

//条件查询：返回数组
User.find({
  name:'张三'
},(err,ret)=>{
  if(!err){
    console.log(ret)
  }else{
    console.log('查询失败');
  
  }
})


//条件查询：返回对象
User.findOne({
  name:'张三'
},(err,ret)=>{
  if(!err){
    console.log(ret)
  }else{
    console.log('查询失败');
  
  }
})



//删除数据 User.remove({数据},(err,ret)=>{})

//删除所有小红
User.remove({
  name:'小红'

},(err,ret)=>{
  if(!err){
    console.log('删除成功');
    console.log(ret);

  }else{
    console.log('删除失败');
  }
})


//更新数据 User.findByIdAndUpdate('id',{更新的内容},(err,ret)=>{})
User.findByIdAndUpdate('id',{
  name:'小红'
},(err,ret)=>{
  if(!err){
    console.log(更新成功);

  }else{
    console.log(更新失败);
  }

})

