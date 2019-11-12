<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-11-12 11:05:00
 -->
<template>
    <div class="box2">
        <!--左箭头-->  
        <h2>个人资料</h2>
        <img id="Backimgs" src="../assets/img/sy_sdk_left.png" @click="back()" />  
    </div>  
</template>

<script>

export default {
    name: 'Back',
    methods:{
      back(){
          this.$router.go(-1);
      }
  }

}

</script>

<style scoped>

.box2{
    padding-top: 10px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    height: .3rem;
    position: relative;
}
h3{
    margin-top: 4px;
}
#Backimgs{
    width: .28rem;
    height: .28rem;  
    position: absolute;
    left: 10px;
    top: 10px;
}

</style>
