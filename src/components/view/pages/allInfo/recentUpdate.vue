<template>
    <section>
        <p>最近更新</p>
        <div class='hotMovie'></div>
    </section>
</template>

<script>
import requestMethod from '../../../../request/request'
export default {
    name:'recentUpdate',
    data(){
        return{}
    },
    mounted(){
        this.getRecentMovie()
    },
    methods:{
        getRecentMovie(){
           requestMethod('recentMovie','get').then(res=>{

           })
        }
        
    }
}
</script>

<style lang="less" scoped>
  .hotMovie{
     
  }
</style>