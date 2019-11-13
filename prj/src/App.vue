<!--
 * @Description: 
 * @Author: 张涛
 * @Date: 2019-11-09 10:36:30
 * @LastEditors: 张涛
 * @LastEditTime: 2019-11-11 12:07:58
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 26.67vw;
}
body{
  font-size: 14px;
  height: 100%;
  background: #f2f2f2;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
  color:#333;
  display: block;
}
</style>
