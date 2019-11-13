<!--
 * @Author: 党婉珍
 * @Date: 2019-11-09 17:13:20
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-11-11 16:24:30
 * @Description: 
 -->
<template>
    <div class="shopBox">   
        <div class="top">
            <!-- {{type}} -->
            <b>玩在闲鱼</b>
        </div>   
        <div class="content">
            <ul>
                <li>
                    <!-- <router-link to="/ClassifyPage"> -->
                    <img src="../assets/img/yutang.png" alt="">
                    <p>我的鱼塘</p>
                    <!-- </router-link> -->
                </li>
                <li>
                    <!-- <router-link to="/ClassifyPage"> -->
                    <img src="../assets/img/tiezi.png" alt="">
                    <p>我的帖子</p>
                    <!-- </router-link> -->
                </li>
                <li>
                    <img src="../assets/img/3gongyi.png" alt="">
                    <p>3小时公益</p>
                </li>
                <li>
                    <img src="../assets/img/duobao.png" alt="">
                    <p>百币夺宝</p>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="../assets/img/xianyu_coin.png" alt="">
                    <p>闲鱼币</p>
                </li>
                <li>
                    <img src="../assets/img/ttzhuanqian.png" alt="">
                    <p>天天赚钱</p>
                </li>
                <li>
                    <img src="../assets/img/bgzhuanqian.png" alt="">
                    <p>边逛边赚钱</p>
                </li>          
            </ul>
        </div> 
    </div>  
</template>

<script>

export default {
  name: 'Play',
//   props:['type'],
//   data () {
//     return {
//         books:[
//         ],
//         obj:{
//             '最新':'getNews',
//             '热销':'getHot'
//         }
//     }
//   },
//   created() {
//     fetch('/api/books')
//       .then(res=>{
//         return res.json();
//       })
//       .then(data=>{
//           let funcName = this.obj[this.type];
//           this.books = this[funcName](data);
//      })
//      .catch(err=>{
//        console.log(err);
//      })
//   },
//   methods:{
//       getNews(data){
//           let arr = [];
//           for(let i in data){
//               if(data[i].isNew){
//                   arr.push(data[i]);
//               }
//           }
//           return arr;
//       },
//       getHot(data){
//           data.sort(function (obj1,obj2) {
//               return obj2.buycount-obj1.buycount;
//           });
//           let arr = data.slice(0,3);
//           return arr;
//       }
//   }
}
</script>

<style scoped>
.shopBox{
    margin-top: .1rem;
    width: 94%;
    margin-left: 3%; 
    background-color: white;
    border-radius: 18px;
}
ul{
    height: .8rem;
}
.content{
    overflow: hidden;
    width: 100%;
}
.top{
    width: 100%;
    height: .2rem;
}
.top b{
    display: block;
    padding: 5px 0 20px 15px;
}
li{
    width: 25%;
    height: .5rem;
    font-size: 12px;
    float:left;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
}
li img{
    width: .3rem;
    margin: auto;
}
</style>