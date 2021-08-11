<template>
  <div class="hello">
    {{msg}}
    <p class="d1" >你好</p>
    <P>{{userid}}</P>
    <router-link to="/user1">用户1</router-link>
    <!-- query的路径配置绑定属性的方式用对象传递参数 -->
    <!-- <router-link :to="{path:'/user1',query:{cloth:'红色衣服',shoes:'鞋子'}}">用户1的query属性</router-link> -->
    <router-link to="/user2">用户2</router-link>
    <!-- <router-view></router-view> -->
    <!-- keep-alive -->
    <keep-alive exclude="user2">
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import user1 from './user1.vue'
import user2 from './user2.vue'
export default {
  name: 'user',
  data() {
    return {
      msg:'我是用户界面'
    }
  },
  // 创建的时候回调
  created() {
    document.title='用户界面'
  },
  //template挂载的时候回调
  mounted() {
    
  },
  //界面发生刷新的时候回调
  updated() {
    
  },
  //销毁
  destroyed() {
    
  },
  props: {
    
  },
  //只有组件在被keep-aliv包裹时才有效
  //活跃
  activated() {
    
  },
  //不活跃
  deactivated() {
    
  },
  //挂载
  computed:{
    userid(){
     //拿到当前活跃状态的路由(this.$route.params.动态id)渲染到user界面param（parameter参数）
          return this.$route.params.a
    }
    },
    components:{
        user1,
        user2
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import '../css'; */
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
