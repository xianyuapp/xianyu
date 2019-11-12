<!--
 * @Author: 党婉珍
 * @Date: 2019-11-09 15:41:01
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-11-11 16:24:15
 * @Description: 
 -->
<template>
    <div class="box">
        <img id="imgs" src="../assets/img/securit.jpg" alt="">
        <!-- <router-link to=""> -->
            <p id="gocheck">去认证</p>
        <!-- </router-link> -->
    </div>
</template>

<script>
export default {
    name:"Securit"
}
</script>

<style scoped>
.box{
    width: 94%;
    padding-top: .4rem;
    padding-left: 3%; 
}
#imgs{
    width: 100%;
    border-radius: 18px; 
}
#gocheck{
    width: .72rem;
    height: .32rem;
    color: white;
    background:rgb(240, 97, 62);
    border-radius: .3rem;
    line-height: .3rem;
    text-align: center;
    position: relative;
    top: -0.5rem;
    left: .28rem
}
</style>