<!--
 * @Author: 党婉珍
 * @Date: 2019-11-11 21:32:00
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-11-12 15:14:18
 * @Description: 
 -->
<template>
    <div class="content">
        <p class="info">基本信息</p>
        <div class="section">
            <ul>
                <li class="firstElement">
                    <p class="firleft">头像</p>
                    <img id="imgs" src="static/img/weiwei.jpg" alt="">
                </li>
                <!-- <li>
                    会员名
                    <span>阿夏火花</span>
                </li> -->
                <li>
                    <p class="secleft">昵称</p>
                    <input type="text" placeholder="党小壮   >">
                </li>
                <li>
                    <p class="secleft">真实姓名</p>
                    <input type="text" placeholder="党**   >">
                </li>
                <li><p>手机号</p><input type="text" placeholder=">"></li>
                <li><p>性别</p><input type="text" placeholder=">"></li>
                <li><p>生日</p><input type="text" placeholder=">"></li>
                <li><p>收货地址</p><input type="text" placeholder=">"></li>
            </ul>
        </div>
        <input id="save" type="button" value="保存">
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.content{
    width:100%;
    background: rgb(247, 247, 247);
}
.info{
    width:100%;
    height: .3rem;
    color: rgb(116, 105, 105);
    background: rgb(247, 247, 247);
    padding-left: 16px;
    padding-top: .2rem;
    padding-bottom: .1rem;
}

#imgs{
    float: left;
    width: .73rem;
    border-radius: 6px;
    margin-left:16px;
    margin-top: 10px;
}
.section{
    width:94%;
    margin-left: 3%;
    /* height: 5rem;
    border-radius: .5rem; */
}
ul{
    background: white;
    border-radius: .3rem;
}
ul li{
    display: flex;
    justify-content: space-between;
    margin-top: .2rem;
    margin-left: 16px;
    padding-left: 10px;
    padding-right: 10px;
    min-height: .4rem;
}
input{
    border: none;
    width: .6rem;
}
.firleft{
    font-size: 16px;
    margin-top: .35rem;
    font-weight: bolder;
}
span{
    color:gray;
}
p{
    color:black;
    font-weight: bolder;
}
#save{
    color: white;
    font-size:.2rem;
    width:94%;
    height:.4rem;
    line-height:.4rem;
    margin-top: .2rem;
    /* border-radius: 5px; */
    margin-left: 3%;
    background:rgb(223, 13, 13);
}
</style>