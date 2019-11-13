<!--
 * @Description: 
 * @Author: 张涛
 * @Date: 2019-11-11 16:23:58
 * @LastEditors: 张涛
 * @LastEditTime: 2019-11-12 17:39:54
 -->
 <template>
    <div class="box">
        <div class="biaoti">
            <p>为你推荐的鱼塘</p>
        </div>
        <div class="us">
            <div class="nve">
                <img src="../assets/img/mote.jpg" alt="">
            </div>
            <div class="flex">
                <div class="left">
                    <b>摄影师模特交流</b>
                    <p>6.4万塘民在这里</p>
                </div>
                <div class="regit">
                    <p>走进鱼塘</p>
                </div>
            </div>
        </div>
        <div class="us">
            <div class="nve">
                <img src="../assets/img/mote.jpg" alt="">
            </div>
            <div class="flex">
                <div class="left">
                    <b>摄影师模特交流</b>
                    <p>6.4万塘民在这里</p>
                </div>
                <div class="regit">
                    <p>走进鱼塘</p>
                </div>
            </div>
        </div>
        <div class="us">
            <div class="nve">
                <img src="../assets/img/mote.jpg" alt="">
            </div>
            <div class="flex">
                <div class="left">
                    <b>摄影师模特交流</b>
                    <p>6.4万塘民在这里</p>
                </div>
                <div class="regit">
                    <p>走进鱼塘</p>
                </div>
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
}
</script>

<style scoped>
.box{
    
    width: 94%;
    height: 6rem;
    margin: 10px auto;
    border-radius:0.2rem ;
}
.biaoti{
    width: 100%;
    height: 0.72rem;
    border-radius:0.2rem 0.2rem 0 0;
    background:#fff;
}

.biaoti p{
    line-height:.72rem;
    margin-left: .2rem;
    font-size: 24px;
    font-weight: 600;
}

.us{
    width: 100%;
    height: 1rem;
    background:#fff;
    overflow: hidden;
    display: flex;
}

.nve{
    width: .69rem;
    height: .69rem;
    border-radius: .1rem;
    margin:15px 10px;
}

.nve img{
    width: 100%;
    height: 100%;
    border-radius: .1rem;
}

.flex{
    height: 1rem;
    width: 70%;
    display: flex;
}

.left{
    width: 1.7rem;
    height: 100%;
    padding-top:.2rem;
    line-height: .3rem;
}

.left b{
    font-size: 20px;
}

.left p{
    color: #888;
}

.regit{
    width: .8rem;
    height: 0.4rem;
    border-radius: .3rem;
    margin: auto;
    border: 1px solid #888;
}

.regit p{
    line-height: .4rem;
    text-align: center;
}
</style>