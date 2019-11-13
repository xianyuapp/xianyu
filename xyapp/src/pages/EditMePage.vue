<!--
 * @Author: 党婉珍
 * @Date: 2019-11-11 20:40:44
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-11-12 11:15:38
 * @Description: 
 -->
<template>
    <div id="conMain">
        <Back03></Back03>
        <Myinfos></Myinfos>
    </div>
</template>

<script>
import Back03 from '../components/Back03';
import Myinfos from '../components/Myinfos';
export default {
    name:"EditMe",
    data(){

   },
   components:{
       Back03,Myinfos
   },
   methods:{
       
   }
}
</script>

<style scoped>
.conMain{
    background-color: rgb(247, 247, 247);
}
</style>