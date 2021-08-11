<template>
  <slot>
    <taber1 class='d1'>
        <div>
            <img src="./img/1.jpg" alt="" srcset="">
          <div>
            <p>首页</p>
        </div>
    </div>
    </taber1>  

    <taber1>
        <div>

          <div>
            <p>分类</p>
        </div>
    </div>
    </taber1> 

    <taber1>
        <div>

          <div>
            <p>商城</p>
        </div>
    </div>
    </taber1> 
    
    <taber1>
        <div>
          <img src="./img/1.jpg" alt="" srcset="">
          <div>
            <p>我的</p>
        </div>
    </div>
    </taber1> 
  </slot>
</template>
<script>
import taber1 from './taber1.vue'
export default {
  name:'taber',
  comments:{
     taber1
  }
}
</script>
<style scoped>
@import './css/1.css'
</style>