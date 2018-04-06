<template>
  <div>
      <h1 class="hw">hello warld</h1>
      <h1>{{ msg }}</h1>
      <router-view/>
  </div>
</template>
<script>
export default {
  data () {
      return {
          msg:'测试组件 主路由'
      }
  }
}
</script>
<style scoped>
    .hw{
        background-color: #ff00ff
    }
</style>


