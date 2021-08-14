const mongoose = require('mongoose');
//连接数据库
//指定连接的数据库不需要存在,当你插入第一条数据库的时候就会自动创建出来
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

//创建一个模型，就是在设计一个数据库
//MongoDB是动态的非常灵活，只需要在代码中设计你的数据库就可以了
//mongoose这个包可以让你的设计编写过程变得更简单
//const Cat = mongoose.model('表名', 数据文档);
const Cat = mongoose.model('Cat', { name: String });

//实例化一个Cat
const kitty = new Cat({ name: 'Zildjian' });

//持久化保存这个Kitty实例
kitty.save().then(() => console.log('meow'));

//最终创建一个数据表，在MongoDB中表称之为集合，它的集合就相当于数组，这个数组的名称叫cats(小写复数的集合名称)