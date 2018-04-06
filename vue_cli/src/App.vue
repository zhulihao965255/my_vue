<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
        <router-link to="/">首页</router-link>
        <router-link to="/test">Test</router-link>
        <router-link :to="{name:'test1',params:{city:'beijing',sum:0}}">Test1</router-link>
        <router-link to="/test/test2">Test2</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
