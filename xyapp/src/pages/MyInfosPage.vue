<!--
 * @Author: 党婉珍
 * @Date: 2019-11-11 21:50:53
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-11-12 09:16:11
 * @Description: 
 -->
<template>
    <div class="inBox">
        <Back02></Back02>
        <InHead></InHead>
        <InFooter></InFooter>
    </div>
    
</template>

<script>
import Back02 from '../components/Back02';
import InHead from '../components/InHead';
import InFooter from '../components/InFooter';
export default {
    name:"MyInfosPage",
    data(){

   },
   components:{
       Back02,InHead,InFooter
   },
   methods:{
       
   }
}
</script>

<style scoped>
.inBox{
    width: 100%;
    background-color: rgb(247, 247, 247);
}
</style>