<!--
 * @Author: 党婉珍
 * @Date: 2019-11-08 21:10:24
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-11-13 10:26:10
 * @Description: 
 -->
<template>
    <div class="class">
        <Head v-bind:id="id"></Head>
        <div class="content">
            <FloatBox></FloatBox>
            <Securit></Securit>
            <Sale></Sale>
            <Shopping></Shopping>
            <Play></Play>
            <Tools></Tools>
            <!-- <NavButtom></NavButtom> -->
        </div>
    </div>
</template>

<script>
import Head from '../components/Head';
import FloatBox from '../components/FloatBox';
import Securit from '../components/Securit';
import Shopping from '../components/Shopping';
import Sale from '../components/Sale';
import Play from '../components/Play';
import Tools from '../components/Tools';
// import NavButtom from '../components/NavButtom';

export default {
    name:"MyinfosPage",
    props:["id"],
    data () {
        return {
      
        }
    },
    components:{
        Head,FloatBox,Securit,Shopping,Sale,Play,Tools
        // ,NavButtom
    }
}
</script>
    
<style scoped>
.content{
    position: absolute;
    background-color: rgb(247, 247, 247);
}
ul li{
    list-style: none;
}
</style>