<!--
 * @Author: 党婉珍
 * @Date: 2019-11-11 15:15:28
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-11-11 20:36:12
 * @Description: 
 -->
<template>
    <div id="box">
        <div class="headInfo">
            <img id="imgMe" src="../assets/img/sc_touxiang.jpg" alt="">
            <div class="user">
                <h2>党小壮</h2>
                <p class="mypage"><span>2019:04:16</span>日发布</p>
            </div>
            <span style="color:red;float:right;font-size:20px;position:absolute;right:10px;top:33px;font-weight:border;">
                ￥85
            </span>
        </div>
        <div class="imgBox">
            <img src="../assets/img/sc_good-1.jpg" alt="">
        </div>
        <div class="footInfo">
            <b style="display:block;padding:16px 16px;">全新baby家焦糖熊正品现货</b>
            <hr>
            <div class="footer">
                <span style="color:skyblue;">来自深圳</span>
                <div class="collect">
                    <img id="collectImg" @click="collect()" src="../assets/img/mycollect.png" alt="">
                    <p style="position:absolute;right:10px;bottom:7px;">取消收藏</p>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Goodsdetail"
}
</script>

<style scoped>
#box{
    width: 96%;
    height: 3rem;
}
.headInfo{
    position: relative;
    width: 100%;
    height: 1rem;
    padding-bottom:10px; 
}
#imgMe{
    float: left;
    width: .73rem;
    border-radius: 6px;
    margin-left: 16px;
    margin-top: 16px;
    margin-right: 10px;
}
h2{
    padding-top: .28rem;
    padding-bottom: 5px;
    font-weight: normal;
}
.imgBox,.footInfo{
    margin-left: 16px;
    width:96%;
}
.footer{
    padding: 16px 16px;
    display: flex;
    justify-content: space-between;
}
.collect{
    position: relative;
    width: .9rem;
    height: .28rem;
    border: 1px solid gray;
}
#collectImg{
    width: .2rem;
    height: .2rem;
    position: absolute;
}

</style>