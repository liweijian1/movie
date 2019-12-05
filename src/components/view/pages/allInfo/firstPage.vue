<template>
    <section>
        <div>
            <SwiperImage></SwiperImage>
        </div>
    </section>
</template>

<script>
import requestMethod from './../../../../request/request'
import SwiperImage from './swiperImage'
export default {
    name:'movieFirstPage',
    components:{
        SwiperImage
    },
    data(){
        return{}
    },
    mounted(){
      this.getSwiper()
    },
    methods:{
        getSwiper(){
           requestMethod('swiper','get').then(()=>{

           })
        }
    }
}
</script>

<style scoped>

</style>