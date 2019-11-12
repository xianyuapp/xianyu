<!--
 * @Author: 党婉珍
 * @Date: 2019-11-09 17:13:20
 * @LastEditors: 党婉珍
 * @LastEditTime: 2019-11-11 15:50:37
 * @Description: 
 -->
<template>
    <div class="shopBox">   
        <div class="top">
            <!-- {{type}} -->
            <b>其他工具</b>
        </div>   
        <div class="content">
            <ul>
                <li>
                    <img src="../assets/img/qt_renzheng.png" alt="">
                    <p>认证招商</p>
                </li>
                <li>
                    <img src="../assets/img/qt_anquan.png" alt="">
                    <p>安全中心</p>
                </li>
                <li>
                    <img src="../assets/img/qt_kefu.png" alt="">
                    <p>客服中心</p>
                </li>
                <li>
                    <img src="../assets/img/qt_hongbao.png" alt="">
                    <p>我的红包</p>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="../assets/img/qt_wzdaode.png" alt="">
                    <p>我租到的</p>
                </li>
                <li>
                    <img src="../assets/img/qt_wdzufang.png" alt="">
                    <p>我的租房</p>
                </li>
                <li>
                    <img src="../assets/img/qt_paimai.png" alt="">
                    <p>我的拍卖</p>
                </li>   
                <li>
                    <img src="../assets/img/qt_xygyue.png" alt="">
                    <p>闲鱼公约</p>
                </li>                 
            </ul>
            <ul>
                <li>
                    <img src="../assets/img/qt_txzheng.png" alt="">
                    <p>实人通行证</p>
                </li>
                <li>
                    <img src="../assets/img/qt_wuliu.png" alt="">
                    <p>物流权益</p>
                </li>
                <li>
                    <img src="../assets/img/qt_xyfamily.png" alt="">
                    <p>闲鱼family</p>
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