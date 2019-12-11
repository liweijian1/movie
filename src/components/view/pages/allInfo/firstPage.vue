<template>
    <section>
        <div>
          <div class='swiperInfor'>
             <div class='swiperImage'>
               <SwiperImage :swiperData='swiperData'></SwiperImage>
             </div>
             <div class='movie-menu'>
                <p>分类</p>
                <div class='movie-menu-list'>
                    <a href='javascript:;' v-for='item in menuList' :key=item>{{item}}</a>
                </div>
             </div>
          </div> 
        <div class='hotMovie'>
            <HotRecommend></HotRecommend>
        </div>
        <div>
            <RecentUpdate></RecentUpdate>
        </div>
    </div>   
    </section>
</template>

<script>
import requestMethod from './../../../../request/request'
import SwiperImage from './swiperImage'
import HotRecommend from './hotRecommend'
import RecentUpdate from './recentUpdate'
export default {
    name:'movieFirstPage',
    components:{
        SwiperImage,
        HotRecommend,
        RecentUpdate
    },
    data(){
        return{
            swiperData:[],
            menuList:[],
        }
    },
    created(){
        this.getSwiper()
    },
    mounted(){
     
    },
    methods:{
        getSwiper(){
           requestMethod('swiper','get').then(res => {
               this.swiperData = res.data.data.movieTitle
               this.menuList = res.data.data.movieType
           })
        }
    }
}
</script>

<style lang="less" scoped>
   div {
       margin: 0 0 20px 0;
   }
   .swiperInfor{
       display: flex;
       //flex-direction: column;
       //align-items: center;
   }
   .swiperImage{
      width: 60%;
   }
   .movie-menu{
       width: 40%;
       outline: 1px solid black;
   }
   .movie-menu-list{
       display: grid;
       grid-template-columns: repeat(3,33.33%);
       justify-items: center ;
       cursor: pointer;
       text-decoration:none;
   }
   .hotMovie{
       
   }
</style>