<template>
    <section>
        <p class="hotTitle">最热</p>
        <div>

        </div>
    </section>
</template>

<script>
import requestMethod from './../../../../request/request'
export default {
    name:'hotRecommend',
    data(){
        return{}
    },
    created(){
        //this.getHotMovie()
    },
    methods:{
        getHotMovie(){
           requestMethod('hotData','get').then(res => {
               console.log(res)
           })
        }
    }
}
</script>

<style lang='less' scoped>
    .hotTitle{
        font-weight: bolder;
        cursor: pointer
    }
</style>