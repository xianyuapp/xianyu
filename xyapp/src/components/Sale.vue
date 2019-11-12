<!--
 * @Author: 党婉珍
 * @Date: 2019-11-09 17:13:20
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-11-11 16:23:45
 * @Description: 
 -->
<template>
    <div class="shopBox">   
        <div class="top">
            <!-- {{type}} -->
            <b>卖在闲鱼</b>
        </div>   
        <div class="content">
            <ul>
                <li>
                    <!-- <router-link to="/ClassifyPage"> -->
                <img src="../assets/img/mypublish.png" alt="">
                <p>我发布的</p>
                <span>0</span>
                <!-- <span>{{num1}}</span> -->
                <!-- </router-link> -->
                </li>
                <li>
                <img src="../assets/img/mysell.png" alt="">
                <p>我卖出的</p>
                <span>0</span>
                <!-- <span>{{num2}}</span> -->
                </li>
            </ul>
        </div> 
    </div>  
</template>

<script>

export default {
  name: 'Sale',
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
    width: 94%;
    height: 1rem;
    margin-left: 3%; 
    background-color: white;
    border-radius: 18px;
    margin-top: -.25rem;
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
    width: 33%;
    height: .5rem;
    font-size: 12px;
    float:left;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
}
li img{
    width: .3rem;
    margin: auto;
}
</style>