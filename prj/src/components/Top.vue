<!--
 * @Description: Top 排行
 * @Author: 张涛
 * @Date: 2019-11-12 10:20:37
 * @LastEditors: 张涛
 * @LastEditTime: 2019-11-12 14:58:48
 -->
<template>
    <div class="box">
        <div class="top">
            <div class="topz"> 
                <p>Top &nbsp;10 <br>游山玩水在这里</p> 
            </div>
        </div>
        <div class="travel">
            <div class="xuhao">
                <p>1</p>
            </div>
            <div class="tupian">
                <img src="../assets/img/z-txiang.jpg" alt="">
            </div>
            <div  class="medalSpan">
                <b>咱们去旅行</b>
                <span class="mspan">3.6万塘民在这里</span>
                <span>愿有人陪你看风花雪月</span>
            </div>
        </div>
        <div class="travel">
            <div class="xuhao xuhao2">
                <p>2</p>
            </div>
            <div class="tupian">
                <img src="../assets/img/z-txiang.jpg" alt="">
            </div>
            <div  class="medalSpan">
                <b>咱们去旅行</b>
                <span class="mspan">3.6万塘民在这里</span>
                <span>愿有人陪你看风花雪月</span>
            </div>
        </div>
        <div class="travel">
            <div class="xuhao xuhao3">
                <p>3</p>
            </div>
            <div class="tupian">
                <img src="../assets/img/z-txiang.jpg" alt="">
            </div>
            <div  class="medalSpan">
                <b>咱们去旅行</b>
                <span class="mspan">3.6万塘民在这里</span>
                <span>愿有人陪你看风花雪月</span>
            </div>
        </div>
        <div class="foot">
            <p>查看更多</p>
        </div>

        
    </div>
</template>    
    
<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<style scoped>
.box{
    width: 94%;
    /* background: lightsalmon; */
    margin:10px auto;
    border-radius: .2rem;
}

.top{
    width: 100%;
    height: 1.03rem;
    background: url(../assets/img/top.jpg) center center;
    border-radius: .2rem .2rem 0 0;
    position: relative;
}

.topz{
    width: 100%;
    height: 1.03rem;
    border-radius: .2rem .2rem 0 0;
    background: rgba(77, 77, 74, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
}

.top p{
    padding-top:.23rem;
    padding-left:.30rem;
    font-size: 20px;
    line-height: .3rem;
    color: #fff;
}

.travel{
    width: 100%;
    height: 1.3rem;
    background: #fff;
    overflow: hidden;
    display: flex;
}

.xuhao{
    width: .24rem;
    height: .24rem;
    background: #ff4e4e;
    border-radius: 2px;
    margin-left:.1rem;
    margin-top:.5rem;
}

.xuhao2{
    background: #ff7342;
}

.xuhao3{
    background: #ffb549;
}

.xuhao p{
    color: #fff;
    line-height: .24rem;
    text-align: center;
}

.tupian{
    width: .7rem;
    height: .7rem;
    background: #ff4e4e;
    border-radius: 2px;
    margin-left:.2rem;
    margin-top:.25rem;
}

.tupian img{
    width: 100%;
    height: 100%;
    border-radius: 2px;
}
.medalSpan {
    float: right;
    margin-top: .20rem;
    margin-left:.17rem;
}

.medalSpan b{
    font-size: 18px;
}

.medalSpan span{
    display: block;
}

.mspan{
    margin-top:.1rem;
    margin-bottom: .2rem;
    color: #8a8a8a;
}

.medalSpan span:last-child{
    color: #8a8a8a;
}

.foot{
    width: 100%;
    height: 0.69rem;
    background: #fff;
    border-top:1px solid #f0f0f0;
    border-radius: 0 0 .2rem .2rem;
}

.foot p{
    font-size: 24px;
    line-height: 0.69rem;
    text-align: center;
    font-weight: 600;
}
</style>