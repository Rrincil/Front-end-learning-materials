<template>
  <div>
    <ul class="d1">
      <li v-for="item in mes" >{{item}}</li>
    </ul>
    
  </div>
</template>
<script>
export default {
  name:'user2',
  data() {
    return {
      mes:['用户1','小丽','hahaha']
    }
  },
}
</script>
<style scoped>
.d1 li{
   color:antiquewhite}
</style>
