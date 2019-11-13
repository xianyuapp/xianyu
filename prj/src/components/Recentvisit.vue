<!--
 * @Description: 最近访问的
 * @Author: 张涛
 * @Date: 2019-11-12 15:17:52
 * @LastEditors: 张涛
 * @LastEditTime: 2019-11-12 17:16:37
 -->
<template>
    <div class="box">
        <div class="setting"></div>
        <div class="classify">
            <div class="titleBer">
                <p>最近访问的鱼塘</p>
            </div>
            <div class="titleHer">
                <ul>
                    <li>
                        <div>
                            <img src="../assets/img/mote.jpg" alt="">
                        </div>
                        <p>摄影师模特交流</p>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/img/guyu.jpg" alt="">
                        </div>
                        <p>古玩古玉爱好者</p>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/img/lol.jpg" alt="">
                        </div>
                        <p>英雄联盟</p>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/img/wangzhe.jpg" alt="">
                        </div>
                        <p>王者荣耀</p>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/img/sanya.jpg" alt="">
                        </div>
                        <p>万千果粉大本营</p>
                    </li>
                </ul>
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
    
.setting{
    height: 1.13rem;
    width: 100%;
    background: #ffe60f;
    border-radius: 0  0   .2rem .2rem;
    z-index: -10;
}   

.classify{
    width: 94%;
    height: 1.6rem;
    background: rgb(255, 255, 255);
    /* background: crimson; */
    margin: 0 auto;
    border-radius: .23rem;
    display: fixed;
    margin-top:-0.7rem;
}

.titleBer{
    padding:.10rem .18rem .2rem .17rem;
}

.titleBer p{
    font-size: 16px;
}

.titleHer ul{
    display: flex;
    overflow-x: auto;
}
.titleHer ul::-webkit-scrollbar {
        display: none;
}

.titleHer ul li{
    display:block;
    margin-left:.10rem;
    margin-right:.10rem;
    margin-bottom:.22rem;
}

.titleHer ul li div{
    width: 0.75rem;
    height: 0.75rem;
    border-radius: .1rem;
    background: rosybrown;
}

.titleHer ul li div img{
    width: 100%;
    height: 100%;
    border-radius: .1rem;
}
.titleHer ul li p{
    font-weight: 600;
    width: 0.8rem;
    height: .18rem;
    overflow: hidden;
    text-align: center;
}
</style>