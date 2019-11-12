<!--
 * @Author: 党婉珍
 * @Date: 2019-11-08 21:01:21
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-11-12 15:46:46
 * @Description: 
 -->
<template>
  <div class="header">
    <div class="userinfo">
      <img id="imgs" src="static/img/weiwei.jpg" alt="">
      <!-- <div class="imgBox">
        <img :src="users.img" alt="">
      </div> -->
      <div class="user">
        <b :users="usersname">13389251547</b>
        <b>昵称：<span>党小壮</span></b>
          <p class="mypage">
        <router-link to="/MyInfosPage">
            个人主页></router-link></p>
        
      </div>
    </div>
    <!-- <div class="config"> -->
      <!-- <router-link to:=''> -->
        <img id="myConfig" src="static/img/config.png" alt="">
      <!-- </router-link> -->
    <!-- </div> -->
  </div>
</template>

<script>

export default {
  name: 'Head',
  data () {
    return {
      users:[
        
      ]
    }
  },
  created(){
    a('http://localhost"3000/users')
    .then(res=>{
      return res.json();
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    height: 1.35rem;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background: rgba(255, 217, 46, 0.897);
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
.mypage{
  width: .8rem;
  height: .3rem;
  background: white;
  border-radius: 20px;
  text-align: center;
  margin-top: .08rem;
  line-height: .3rem;
}
/* .config{
  width:.5rem;
  height:.5rem;
} */
#myConfig{
  display: block;
  float: right;
  margin-top: .25rem;
  margin-right: 3%;
  width: .25rem;
  /* position:fixed;
  left:20px; */
}
</style>
