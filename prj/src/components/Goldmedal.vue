<!--
 * @Description: 金牌鱼塘
 * @Author: 张涛
 * @Date: 2019-11-11 20:15:20
 * @LastEditors: 张涛
 * @LastEditTime: 2019-11-12 10:18:04
 -->
<template>
    <div class="box">
        <div class="titleBer">
            <p>这些鱼塘带你走过的花路</p>
            <div class="all">
                <p>换一换</p>
                <i class="el-icon-refresh"></i>
            </div>
        </div>
        <div class="Gold">
            <div class="medal">
                <div class="medalImg">
                    <img src="../assets/img/plants.jpg" alt="">
                </div>
                <div  class="medalSpan">
                    <b>一起来种草</b>
                    <span class="mspan">9.4万塘民在这里</span>
                    <span>喜欢花花草草聚集地</span>
                </div>
            </div>
            <div class="medal">
                <div class="medalImg">
                    <img src="../assets/img/plants.jpg" alt="">
                </div>
                <div  class="medalSpan">
                    <b>一起来种草</b>
                    <span class="mspan">9.4万塘民在这里</span>
                    <span>喜欢花花草草聚集地</span>
                </div>
            </div>
            <div class="medal">
                <div class="medalImg">
                    <img src="../assets/img/plants.jpg" alt="">
                </div>
                <div  class="medalSpan">
                    <b>一起来种草</b>
                    <span class="mspan">9.4万塘民在这里</span>
                    <span>喜欢花花草草聚集地</span>
                </div>
            </div>
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
    height: 2.1rem;
    background: url(../assets/img/background1.jpg);
    margin: .17rem auto;
    border-radius: .23rem;
}

.titleBer{
    padding:.10rem .18rem .4rem .17rem;
}

.titleBer p{
    font-size: 16px;
    float: left;
    padding-top: 2px;
    color: #ffffff;
}

.all{
    width: .80rem;
    height: .25rem;
    border: 1px solid #ffffff;
    float: right;
    border-radius: .3rem;
}

.all p{
    float: left;
    font-size: 14px;
    padding-left:10px;
    padding-top: 2px;
}

.all i{
    float: right;
    padding-right:5px;
    padding-top: 5px;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
}

.Gold{
    display: flex;
    overflow-x: auto;
}

.Gold::-webkit-scrollbar {
        display: none;
}

.medal{
    flex-shrink: 0;
    width: 2.8rem;
    height: 1.4rem;
    background: #ffffff;
    margin-left:.17rem;
    border-radius: 0.1rem;
    display: flex;
}
.medalImg{
    width: 1rem;
    height: 1rem;
    border-radius: 0.1rem;
    margin-top: .18rem;
    margin-left: .16rem;
}

.medalImg img{
    width: 100%;
    height: 100%;
    border-radius: 0.1rem;
    float: left;
}

.medalSpan {
    float: right;
    margin-top: .23rem;
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
    color: #0daeff;
}
</style>