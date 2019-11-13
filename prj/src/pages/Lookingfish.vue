<!--
 * @Description: 找鱼塘
 * @Author: 张涛
 * @Date: 2019-11-11 16:04:40
 * @LastEditors: 张涛
 * @LastEditTime: 2019-11-12 15:05:21
 -->
<template>
    <div class="fish-z">
        <Zheader class="Zheader"  style="position:fixed; z-index:10;" ></Zheader> 
        <div class="center">
            <Classify></Classify>
            <Goldmedal class="Goldmedal" ></Goldmedal>
            <Top></Top>
            <Top></Top>
        </div>
        <Footer style="position:fixed; z-index:10;bottom: 0; "></Footer>
    </div>

</template>


<script>
import Zheader from '../components/Zheader';
import Classify from '../components/Classify';
import Goldmedal from '../components/Goldmedal';
import Top from '../components/Top';
import Footer from '../components/Footer';


export default {
    name: 'Lookingfish',
    data() {
        return {
        }
    },
    components:{
        Zheader,Classify,Goldmedal,Top,Footer
    }
}
</script>
<style scoped>
.fish-z{
  display: flex;
  flex-direction: column;
  height: 100%;  
}

.center{
  flex: 1;
  overflow-y: auto;
  margin-top:.3rem;
  margin-bottom:.5rem;
}


</style>