<template>
    <section>
        <el-carousel>
            <el-carousel-item v-for='item in swiperData' :key='item.sid'>
                <div :style='item.style'></div>
            </el-carousel-item>
        </el-carousel>
    </section>
</template>
<script>
import requestMethod from './../../../../request/request'
export default {
    name:'swiperImage',
    props:{
        swiperData:{type:Array,required:true}
    },
    data(){
        return{
            
        }
    },
    created(){
        
    },
    methods:{

    }
}
</script>
<style lang='less' scoped>

</style>