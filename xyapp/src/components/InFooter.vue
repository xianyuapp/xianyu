<!--
 * @Author: 党婉珍
 * @Date: 2019-11-11 23:49:09
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-11-12 10:46:11
 * @Description: 
 -->
<template>
    <div class="Infooter">
        <div class="con">
            <ul>
                <li>我的 2</li>
                <li>帖子 0</li>
                <li>评价 8</li>
                <li>动态 9</li>
            </ul>
        </div>
        <div class="content">
            <ul>
                <li>
                    <img src="static/img/wd_tu2.jpg" alt="">
                    <p>阿玛尼 简约银 皮手镯</p>
                    <p style="color:red;font-size:16px;">￥416.0</p>
                </li>
                <li>
                    <img src="static/img/wd_tu1.jpg" alt="">
                    <p>爱普诗 巧克力礼盒</p>
                    <p style="color:red;font-size:16px;">￥118.0</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.Infooter{
    width:96%;
}
ul{
    width: 100%;
    display: flex;
    font-size: 16px;
    justify-content: space-between;
    /* padding-top: .2rem;
    padding-bottom: .1rem; */
    display: flex;
    justify-content: space-around;
}
.con{
    width: 100%;
    height: .4rem;
    background: white;
    line-height: .4rem;
    color: rgb(65, 64, 64);
}
.con li:hover{
    font-weight: border;
    border-bottom: 2px solid orange;
}
.content{
    padding-top: 16px;
    height: 5rem;
}
</style>