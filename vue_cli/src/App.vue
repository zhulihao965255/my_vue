<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
        <button @click="home">首页</button>
		<button @click="back">后退</button>
		<button @click="forward">前进</button>
    </div>
    <div>
        <router-link to="/">首页</router-link>
        <router-link to="/test">Test</router-link>
        <router-link :to="{name:'test1',params:{city:'beijing',sum:0}}">Test1</router-link>
        <router-link to="/test/test2">Test2</router-link>
        <router-link to="/testUrl/5/zhangsan">测试Url传参</router-link>
        <router-link to="/home/8/lisi">重定向到testUrl</router-link>  
        <router-link to="/abc">alias(别名)</router-link>  
        <router-link to="/counter">Counter组件(vuex)</router-link>                                                  
    </div>
    <transition name="fade">
        <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    home() {
      this.$router.push("/");
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-to {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 3s ease-in;
}
.fade-leave-active {
  transition: opacity 3s ease-in;
}
</style>
