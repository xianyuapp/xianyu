<!--
 * @Author: 党婉珍
 * @Date: 2019-11-09 17:13:20
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-11-13 10:26:59
 * @Description: 
 -->
<template>
    <div class="shopBox">   
        <div class="top">
            <!-- {{type}} -->
            <b>买在闲鱼</b>
        </div>   
        <div class="content">
            <ul>
                <li>
                    <!-- <router-link to="/ClassifyPage"> -->
                    <img src="../assets/img/mygoods.png" alt="">
                    <p>我买到的<span>1</span></p>&nbsp;&nbsp;
                    
                    <!-- </router-link> -->
                </li>
                <li>
                    <router-link to="/MycollectionPage">
                    <img src="../assets/img/my_collection.png" alt="">
                    <p>我收藏的<span>0</span></p>&nbsp;&nbsp;
                    
                    </router-link>
                </li>
                <li>
                    <img src="../assets/img/mianfeis.png" alt="">
                    <p>参与的免费送</p>
                </li>
            </ul>
        </div> 
    </div>  
</template>

<script>

export default {
  name: 'Shopping',
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
    margin-top: .1rem;
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
    padding-top: 15px;
}
li img{
    width: .3rem;
    margin: auto;
}
</style>