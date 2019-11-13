<!--
 * @Description: 内容
 * @Author: 张涛
 * @Date: 2019-11-09 10:46:45
 * @LastEditors: 张涛
 * @LastEditTime: 2019-11-11 14:58:54
 -->
<template>
    <div class="box">
        <div class="commentBox">
            <div class="commentImg">
                <img src="../assets/img/vkcpq.jpg" alt="">
            </div>
            <div class="sketch">
            <p>梦想有多大，舞台就有多大</p>
            </div>
            <!-- 评论 -->
            <div class="discuss">
                <span>伊拉克福翁：路在自己脚下，越走越平</span>
            </div>
            
        </div>
        <div class="commentBox">
                <div class="commentImg">
                    <img src="../assets/img/stream.jpg" alt="">
                </div>
                <div class="sketch">
                <p>梦想有多大，舞台就有多大</p>
                </div>
                <!-- 评论 -->
                <div class="discuss">
                    <span>伊拉克福翁：路在自己脚下，越走越平</span>
                </div>
        </div>
        <div class="commentBox">
                <div class="commentImg">
                    <img src="../assets/img/vkcpq.jpg" alt="">
                </div>
                <div class="sketch">
                <p>梦想有多大，舞台就有多大</p>
                </div>
                <!-- 评论 -->
                <div class="discuss">
                    <span>伊拉克福翁：路在自己脚下，越走越平</span>
                </div>
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
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}

.box div:nth-child(2n+1){
    margin-right: 0.1rem;

}

.commentBox{
    width: 1.7rem;
    background: #dadada;
    border-radius: 10px;
    margin-top:10px;
}

.sketch{
    background: rgb(250, 250, 250);
}
 
.commentImg{
    width: 100%;
    height: 2.2rem;
    border-radius: 10px 10px 0 0;

}

.discuss{
    width: 100%;
    padding-left: 2px;
    display: flex;

}

img{
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
}

p{
    margin-bottom: 3px;
    font-size: 12px;
    padding: 10px 5px 10px 5px;
}

span{
    font-size: 10px;
    color: #888;
    padding: 10px 5px 10px 5px;
}
</style>
     