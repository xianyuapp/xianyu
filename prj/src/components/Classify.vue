<!--
 * @Description: 分类找鱼塘
 * @Author: 张涛
 * @Date: 2019-11-11 16:16:37
 * @LastEditors: 张涛
 * @LastEditTime: 2019-11-12 18:07:08
 -->
<template>
    <div class="box">
        <div class="setting"></div>
        <div class="classify">
            <div class="titleBer">
               <p>分类找鱼塘</p>
                <div class="all">
                    <p>全部鱼塘</p>
                    <i class="el-icon-arrow-right"></i>
                </div>
            </div>
            <div class="titleHer">
                <ul>
                    <li>
                        <div>
                            <img src="../assets/img/shuma.jpg" alt="">
                        </div>
                        <p>数码家电</p>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/img/exercise.jpg" alt="">
                        </div>
                        <p>运动</p>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/img/shuttle.jpg" alt="">
                        </div>
                        <p>穿搭</p>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/img/luxing.jpg" alt="">
                        </div>
                        <p>美食旅行</p>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/img/meizhuang.jpg" alt="">
                        </div>
                        <p>美妆</p>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/img/car.jpg" alt="">
                        </div>
                        <p>汽车</p>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/img/plants.jpg" alt="">
                        </div>
                        <p>绿植</p>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/img/pet.jpg" alt="">
                        </div>
                        <p>宠物</p>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/img/diy.jpg" alt="">
                        </div>
                        <p>DIY</p>
                    </li>
                    <li>
                        <div>
                            <img src="../assets/img/infant.jpg" alt="">
                        </div>
                        <p>母婴</p>
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
    height: 2.3rem;
    background: rgb(255, 255, 255);
    /* background: crimson; */
    margin: 0 auto;
    border-radius: .23rem;
    display: fixed;
    margin-top:-.97rem;
}

.titleBer{
    padding:.10rem .18rem .5rem .17rem;
}

p{
    font-size: 16px;
    float: left;
    padding-top: 2px;

}

.all{
    width: .90rem;
    height: .25rem;
    border: 1px solid #e1e1e1;
    float: right;
    border-radius: .3rem;
}

.all p{
    float: left;
    font-size: 14px;
    padding-left:10px;
    padding-top: 2px;
    color: #888888;
}

.all i{
    float: right;
    padding-right:5px;
    padding-top: 5px;
    font-size: 14px;
    font-weight: 600;
    color: #cdcdcd;
}

.titleHer{
    display: flex;
}

.titleHer ul{
    display: flex;
    flex-wrap: wrap;
}

.titleHer ul li{
    display:block;
    margin-left:.10rem;
    margin-right:.10rem;
    margin-bottom:.15rem;
}

.titleHer ul li div{
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: rosybrown;
}

.titleHer ul li div img{
    width: 100%;
    height: 100%;
    border-radius: 50%;

}

.titleHer ul li p{
    width: .50rem;
    font-size: 12px;
    color: #666666;
    text-align: center;
}
</style>