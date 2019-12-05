<template>
<section>
  <!-- <div v-if='showLogin' class='loginPage'> -->
  <div  class='firstPage'>
   <el-form ref='formItem' :model='loginForm' label-width='80px' class="loginForm" v-focus>
     <el-form-item label='用户名'>
       <el-input  v-model='loginForm.userName'></el-input>
     </el-form-item>
     <el-form-item label='密码'>
       <el-input  v-model='loginForm.passWord'></el-input>
     </el-form-item>
   </el-form>
  </div>
   <el-button v-if='this.showModel' @click="login">登录</el-button>
   <el-button v-else @click="register">注册</el-button>
   <div style='margin-top:20px'>
     <a href='javascript:;' @click='changeModel(1)' :class='{login:islogin}'>登录</a>
     <a href='javascript:;' @click='changeModel(2)' :class="{register:isregister}">注册</a>
   </div>
  <!-- </div> -->
</section>
</template>

<script>
import requestMethod from './../../../request/request'
export default {
  name: 'HelloWorld',
  data(){
    return{
      showLogin:true,
      showModel:true,
      islogin:false,
      isregister:true,
      loginForm:{
          userName:'',
          passWord:''
      }
    }
  },
  created(){},
  mounted(){},
  watch:{},
  computed:{},
  //自定义指令
  directives:{
    focus:{
      inserted:function(el){
        let forms = el.querySelectorAll('input')
        forms[0].focus()
        forms.forEach((item,index) => {
          //setAttribute给对象设置新属性并赋值
          item.setAttribute('keyFocus',index)
          //新增监听事件
          item.addEventListener('keyup', ev=>{
            if(ev.keyCode === 13){
              let i = parseInt(ev.srcElement.getAttribute('keyFocus'))
              if(i<forms.length-1){
                forms[i+1].focus()
              }
            }
          })
        })
      }
    }
  },
  methods:{
    changeFocus(val){
     
    },
    changeModel(val){
        if(val === 1){
          this.islogin = false
          this.isregister = true
          this.showModel = true
        }
        else if(val === 2){
          this.islogin = true
          this.isregister = false
          this.showModel = false
        }
    },
    login(){
      requestMethod('login','post',this.loginForm).then(res => {
          if(!res.data.success){
              alert('账号或密码不正确')
          }
          else{
            this.showLogin = false
            this.$router.push({path:'/home'})
          }
      })
    },
    register(){
      requestMethod('register','post',this.loginForm).then(res => {
         if(res.success){
           alert('注册成功')
         }else{
           alert('该账号已存在')
         }
      })
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
    a{
      text-decoration: none;
      cursor: pointer;
      font-size:10px;
      margin-right: 20px;
    }
    .login,.register{
      opacity: 0.5;
      //pointer-events: none
    }
</style>
