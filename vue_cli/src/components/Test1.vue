<template>
  <div>
      <h1>{{ msg2 }}</h1>
      <ul>
          <li>我的城市:{{ $route.params.city }}</li>
          <li>我的大学:{{ $route.params.sco }}</li>
      </ul>
  </div>
</template>
<script>
export default {
   name:'Test1',
   data () {
       return {
           msg2:'stu Rooter'
       }
   }
}
</script>
<style scoped>
    ul li{
        list-style-type: none;
    }
</style>


