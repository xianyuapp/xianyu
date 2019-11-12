<!--
 * @Author: your name
 * @Date: 2019-11-04 16:23:23
 * @LastEditTime: 2019-11-12 15:26:47
 * @LastEditors: 党婉珍
 * @Description: In User Settings Edit
 * @FilePath: \11.04d:\study\third\workspace\day11\src\App.vue
 -->
<template>
  <div id="app">
    <transition name="component-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scped>
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
}
a{
  text-decoration: none;
  color: black;
}
ul li{
    list-style:none;
}
.component-fade-enter-active, .component-fade-leave-active {
    /* transition: opacity .5s ease; */
    transition: all .4s ease; 
}
.component-fade-enter, .component-fade-leave-to {
    /* opacity: 0; */
    transform: translateX(-100%);
}
</style>
