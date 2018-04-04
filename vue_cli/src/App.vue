<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">主页</router-link>
    <router-link to="/test">去Test</router-link>
    <router-link :to="{name:'test1',params:{city:'heb',sco:'nefu'}}">去Test1</router-link>
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
