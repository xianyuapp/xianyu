<!--
 * @Author: 党婉珍
 * @Date: 2019-11-09 15:05:55
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-11-12 18:20:00
 * @Description: 
 -->
<template>
    <div class="floatBox">
        <dic class="float">
            <p type="超赞">988超赞</p>
            <p type="关注">31关注</p>
            <p type="粉丝">416粉丝</p>
            <!-- <p type="超赞">{{num1}}超赞</p>
            <p type="关注">{{num2}}关注</p>
            <p type="粉丝">{{num3}}粉丝</p> -->
        </dic>
    </div>
</template>

<script>
export default {
    name:"FloatBox"
}
</script>

<style scoped>
.floatBox{
  position: absolute;
  top: -.16rem;
  width: 94%;
  height: .5rem; 
  margin-left: 3%;
  border-radius: 10px;
  /* line-height: .5rem; */
  text-align: center;
  background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.float{
    height: .25rem;
}
.floatBox p{
    width:33%;
    float: left;
    border-right: 1px solid gray;
}
.floatBox p:last-child{
    border: none;
}
</style>