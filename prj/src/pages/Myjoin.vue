<!--
 * @Description: 我加入的
 * @Author: 张涛
 * @Date: 2019-11-09 10:43:40
 * @LastEditors: 张涛
 * @LastEditTime: 2019-11-12 16:55:54
 -->

 <template>
    <div class="fish-z">
        <Zheader class="Zheader" style="position:fixed; z-index:10;" ></Zheader> 
        <div class="center">
            <Recentvisit></Recentvisit>
            <Recommmend></Recommmend>
        </div>
        <Footer style="position:fixed; z-index:10;bottom: 0; "></Footer>
    </div>
</template>
    
    
<script>
import Zheader from '../components/Zheader';
import Recentvisit from '../components/Recentvisit';
import Recommmend from '../components/Recommmend';
import Footer from '../components/Footer';

export default {
    name: 'Fishponds',
    data() {
        return {
        }
    },
    components:{
        Zheader,Recentvisit,Recommmend,Footer
        
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
}
    
</style>
    