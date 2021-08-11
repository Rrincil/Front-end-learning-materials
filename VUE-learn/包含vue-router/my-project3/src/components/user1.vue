<template>
  <div>
    <p>用户1</p>
    <ul class="d1">
      <li v-for="item in mes" >{{item}}</li>
      <!-- 获取属性($router.query.属性) -->
      <li>{{$route.query.cloth}}</li>
      <li>{{$route.query.shoes}}</li>
    </ul>

  </div>
</template>
<script>
export default {
  name:'user1',
  data() {
    return {
      mes:['用户2','晓华','啦啦啦']
    }
  },
}
</script>
<style scoped>
.d1 li{
   color:aqua
   }
</style>
