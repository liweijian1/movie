<template>
<section >
  <div class='firstPage'>
   <el-form :model='loginForm' label-width='80px' class="loginForm">
     <el-form-item label='用户名'>
       <el-input v-model='loginForm.username'></el-input>
     </el-form-item>
     <el-form-item label='密码'>
       <el-input v-model='loginForm.password'></el-input>
     </el-form-item>
   </el-form>
  </div>
   <el-button @click="test">测试</el-button>
</section>
</template>

<script>
import requestMethod from './../request/request'
export default {
  name: 'HelloWorld',
  data(){
    return{
      loginForm:{
          userName:'',
          password:''
      }
    }
  },
  methods:{
    test(){
      requestMethod('data','get')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
    section{
      width: 100%;
      height: 100%;
      margin: 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .firstPage{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .loginForm{
      width: 20%;
    }
</style>
