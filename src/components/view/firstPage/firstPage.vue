<template>
    <section class='menu-page'>
        <!-- <div>
             <div style='display:inline-lock'> -->
                 <div class='menu'>
                     <router-link class='menurouter' @click.native='changeMenu("firstPage")' :class="{firstPage:isShowFirstPage}" to='/movieFirstPage'>首页</router-link>
                     <router-link class='menurouter' @click.native='changeMenu("recentUpdate")' :class="{recentUpdate:isShowRecentUpdate}" to='/rencentUpdate'>最近更新</router-link>
                     <router-link class='menurouter' @click.native='changeMenu("hot")' :class="{hot:isShowHot}" to='/hot'>最热</router-link>
                     <el-dropdown class="outBtn" @command='handleCommand'>
                         <span>欢迎光临:{{userName}}</span>
                         <el-dropdown-menu slot='dropdown'>
                             <el-dropdown-item icon="el-icon-place" command='out'>退出登录</el-dropdown-item>
                         </el-dropdown-menu>
                     </el-dropdown>
                     
                 </div>
                 <keep-alive>
                     <router-view class='viewInFor'></router-view>
                 </keep-alive>
             <!-- </div>
        </div> -->
      
        
    </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'firstPage',
    data(){
        return{
            isShowFirstPage:true,
            isShowRecentUpdate:false,
            isShowHot:false,
        }
    },
    methods:{
        changeMenu(val){
            if(val ==='firstPage'){
                this.isShowFirstPage = true
                this.isShowRecentUpdate = false
                this.isShowHot = false
            }
            else if(val === 'recentUpdate'){
                this.isShowFirstPage = false
                this.isShowRecentUpdate = true
                this.isShowHot = false
            }
            else if(val === 'hot'){
                this.isShowFirstPage = false
                this.isShowRecentUpdate = false
                this.isShowHot = true
            }
        },
        handleCommand(command){
            if(command==='out'){
                this.$router.push({path:'/'})
            }
        }
    },
    computed:{
        ...mapState({
            userName:state=>state.userName
        })
    }
}
</script>

<style lang="less" scoped>
 .menu-page{
        width:100%;
        height: 100%;
        background-color: rgb(226, 221, 221);
        //text-align:center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .menu{
        width:100%;
        height:8%;
        background-color:white;
        padding:10px 0 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .menurouter{
        color:#999;
        margin: 0 20px 0 0;
        text-decoration: none;
    }
    .firstPage,.recentUpdate,.hot{
        color: blue
    }
    .viewInFor{
        width: 60%;
        background-color: white
    }
    .outBtn{
        position: absolute;
        left:90%;
    }
</style>