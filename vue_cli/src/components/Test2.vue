<template>
  <h1>这是子路由2</h1>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next){
    console.log(to);
    console.log(from);
    next();
  }
}
</script>
<style scoped>

</style>





