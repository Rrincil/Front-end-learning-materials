import { createStore } from 'vuex'
import vue from 'vue'
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
    //方法中默认传递state参数:dian(state)必须要写参数才能传递
    jia(state){
      state.count++
    },
    jian(state){
      state.count--
    },
    // liu(state,obj){
    //      return state.count+=obj.num
    // }
        //bdian1第一种写法
    bdain1(state,shu){
      console.log(shu);
      state.count+=shu   
    },
    // bdian2第二种写法
    bdian2(state,payload){
      console.log(payload);
      return  state.count+=payload.shu
    },    
    //stu:负载(Payload)
    dian5(state,stu){
      state.student.push(stu)
    },
    Aupdata(state){
      state.student[0].name='小红'
   },
  },
  actions: {
    aupdata1:function({commit}){
      setTimeout(()=>{
        //Aupdata是mutation中的方法
        commit("Aupdata")
      },1000)
    },
    //vue2用法用不了
    // aupdata2(contet){
    //   setTimeout(()=>{
    //     //Aupdata是mutation中的方法
    //     context.commit('Aupdata')
    //   },1000)

    // }
    
  },
  getters:{
    //计算属性获取count的平方再展示
 
    ping(state){
       return  state.count*state.count
    },
    dian(state){
      //filter()函数用于筛选出符合要求的数据,并返回该数据集合.从中拿到一个对象s，返回s.age大于s.age18的对象
      return state.student.filter(s=>s.age>18)
    },
    // dian2(state){
    //年龄大于18的个数，length()用不了
    //   return state.student.filter(s=>s.age>18).length()
    // },
    dian3(state,getters){
      //年龄大于18的个数
      return getters.dian
    },
    //大于新输入的值
    dian4(state){
      return (age)=>{
        state.student.filter(s=>s.age>age)
      }
    },
    setadd(state){
      Vue.set()
    }
  },
  modules: {
  },
})
