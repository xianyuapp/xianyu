<!--
 * @Description: 推荐
 * @Author: 张涛
 * @Date: 2019-11-09 10:43:40
 * @LastEditors: 张涛
 * @LastEditTime: 2019-11-12 15:09:25
 -->

<template>
   <div class="fish-z">
      <Zheader class="Zheader" style="position:fixed; z-index:10;" ></Zheader> 
      <div class="center">
         <Zcomment></Zcomment> 
      </div>
      <Footer style="position:fixed; z-index:10;bottom: 0; "></Footer>
   </div>

</template>


<script>
import Zheader from '../components/Zheader';
import Zcomment from '../components/Zcomment';
import Footer from '../components/Footer';

export default {
   name: 'Fishponds',
   data() {
      return {
      }
   },
   components:{
      Zheader,Zcomment,Footer
      
  }
}
</script>
<style scoped>
.fish-z{
  display: flex;
  flex-direction: column;
  height: 100%;  
}

.center{
  flex: 1;
  overflow-y: auto;
  margin-top:.5rem;
  margin-bottom:.5rem;
}

</style>
