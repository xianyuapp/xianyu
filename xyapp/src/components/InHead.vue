<!--
 * @Author: 党婉珍
 * @Date: 2019-11-11 23:21:03
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-11-12 19:46:28
 * @Description: 
 -->
<template>
    <div class="topBox">
        <div class="userinfo">
            <img id="imgs" src="static/img/weiwei.jpg" alt="">
            <div class="user">
                <b>13389251547</b>
                <b>昵称：<span>党小壮</span></b>
                <!-- <router-link to:='/MyInfosPage'>
                <p class="mypage">个人主页></p>
                </router-link> -->
            </div>
        </div>
        <router-link to="/EditMePage">
            <span id="edit">编辑资料</span>
        </router-link>
        <div class="message">
            <p>这个人很懒，什么都没留下...</p>
            <ul>
                <li>0超赞</li>
                <li>1关注</li>
                <li>1粉丝</li>
            </ul>
        </div>
        <!-- <div class="save">
            保存：<input type="button">
        </div> -->
    </div>
    
</template>

<script>
import Back02 from '../components/Back02';
export default {
    name:"EditMe",
    data(){

   },
   components:{
       
   },
   methods:{
       
   }
}
</script>

<style scoped>
.topBox{
    position: relative;
}
.userinfo{
    width: 100%;
    height: 1rem;
}
#imgs{
    float: left;
    width: .73rem;
    border-radius: 6px;
    margin-left:16px;
    margin-top:24px;
}
.user{
    float: left;
    display:flex;
    flex-direction: column;
    height: .45rem;
    margin-left:16px;
    margin-top:24px;
}
b:first-child{
    font-size:16px; 
}
b:nth-child(2){
    font-size: 12px;
}
#edit{
    position: relative;
    right: -2.8rem;
    top: -.55rem;
    padding: 3px;
    border: 1px solid gray;
}
.message{
    width:100%;
    padding-left: 16px;
}
.message ul{
    width: 50%;
    display: flex;
    justify-content: space-between;
    padding-top: .2rem;
    padding-bottom: .1rem;
}
</style>