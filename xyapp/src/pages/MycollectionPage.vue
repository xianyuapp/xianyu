<!--
 * @Author: 党婉珍
 * @Date: 2019-11-11 15:15:28
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-11-11 20:51:27
 * @Description: 
 -->
<template>
    <div class="box">
        <Back type="我收藏的"></Back>
        <Goodsdetail></Goodsdetail>
    </div>
</template>

<script>
import Goodsdetail from '../components/Goodsdetail';
import Back from '../components/Back';

export default {
    name:"MycollectionPage",
    data () {

    },
    components:{
       Back,Goodsdetail 
    }
}
</script>

<style scoped>
.content{
    width: 100%;
    background-color: rgb(247, 247, 247);
}

</style>