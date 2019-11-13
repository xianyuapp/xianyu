<!--
 * @Description: 鱼塘头部
 * @Author: 张涛
 * @Date: 2019-11-09 10:46:45
 * @LastEditors: 张涛
 * @LastEditTime: 2019-11-12 17:43:01
 -->
<template>
   <div class="box">
      <img src="../assets/img/icon_search.png" alt="">
      <div>
         <ul class="box2">
            <li ><router-link to="/Myjoin">我加入的</router-link></li>
            <li><router-link to="/Fishponds">推荐</router-link></li>
            <li> <router-link to="/Lookingfish">找鱼塘</router-link></li>
         </ul>
      </div>
      <div class="box3">
         <i class="el-icon-edit"></i>
         <b>发布</b>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
      }
   },
   methods:{
   }
}
</script>

<style scoped>
.box{
   background:#ffe60f;
   display: flex;
   width: 100%;
   margin: 0 auto;
   height: 0.35rem;
}

img{
   width: .25rem;
   height: .25rem;
   margin-top: .04rem;
   margin-left:.23rem;
   margin-right: .48rem;
}

.box2{
   display: flex;
   line-height: 0.35rem;
}

li{
   margin-right:.20rem;
}

i{
   display: inline;
   line-height: .16rem;
   margin-left:.09rem;
   font-weight: 600;
}

b{
   display: inline;
   line-height: .26rem;
}

.box3{
   background: rgb(255, 255, 255);
   height: .25rem;
   width: .65rem;
   margin: auto 0;
   border-radius: .45rem;
}
</style>
