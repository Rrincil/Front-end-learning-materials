import { createStore } from 'vuex'

export default createStore({
  //state:状态
  state: {
    count:0,
    student:[
      {name:'小猫',age:20},
      {name:'小哈',age:18}

    ]
  },
  //mutations:突变
  mutations: {
    //方法中默认传递state参数:dian(state)
    jia(){
      state.count++
    },
    jian(){
      state.count--
    },
    // liu(state,obj){
    //      return state.count+=obj.num
    // }

  },
  actions: {

  },
  modules: {
  },
  getters:{
    dian(state){
      //filter()函数用于筛选出符合要求的数据,并返回该数据集合.
      return state.student.filter(s=>s.age>18)
    },
    // dian2(state){
    //   //年龄大于18的个数
    //   return state.student.filter(s=>s.age>18).length
    // },
    dian3(state,getters){
      //年龄大于18的个数
      return getters.dain.length
    },
    //大于新输入的值
    dain4(state){
      return (age)=>{
        state.student.filter(s=>s.age>age)
      }
    },
    //stu:负载(Payload)
    dian5(state,stu){
      state.student.push(stu)
    }
  }
})
