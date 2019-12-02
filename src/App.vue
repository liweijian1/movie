<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang='less'> 
   html,body,#app{
     width: 100%;
     height: 100%;
     margin: 0;
   }
</style>
