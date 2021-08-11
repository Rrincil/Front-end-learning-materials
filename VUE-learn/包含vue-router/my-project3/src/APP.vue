<template>
  <div class="d0">
    <router-link to="/Home">Home</router-link>
      {{mes}}
      <!-- 动态路由配置：<router-link :to="动态id"></router-link> -->
      <router-link to="/user" >路由跳转用户界面</router-link>
      <router-link :to="'/user/'+userid">路由跳转指定用户界面</router-link>
      <button @click="tiao">用户</button> 
      <!-- Vuex -->
      <button @click="add">加</button><p>{{$store.state.count}}</p><button @click="reduce">减</button>
      <taber></taber> 
      <!-- 大于18的学生 -->
      <p>{{$store.getters.dian3(18)}}</p>
      <router-view></router-view>
      
  </div>
</template>

<script>
import user from './components/user.vue'
import taber from './components/taber/taber.vue'
export default ({
   name:'APP',
  data () {
    return {
      mes:'我是首页',
      userid:'xiaoyi'
    }
  },
  methods: {
    tiao(){
       //通过代码方式修改跳转路由this.$router.push('路径')
       this.$router.push('../components/user')
      console.log();
    },
    add(){
      this.store.commit('jia')
      // console.log($store.state.count);
    },
    reduce(){
      this.store.commit('jian')
    },
    Adian(){
      const shu={name:'小六',age:25}
      tstore.commit('dain', stu)
    }
  },
  components: {
    user,
    taber,

  }
          
})
</script>

<style>

</style>
