<template>
  <div>
      <h1>这是子路由1</h1>
      <h2>城市: {{ $route.params.city }}</h2>
      <h3>总数:{{ $route.params.sum }}</h3>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

</style>



