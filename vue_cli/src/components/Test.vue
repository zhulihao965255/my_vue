<template>
    <div>
        <h1 class="hw">{{ msg }}</h1>
        <p>HAHA</p>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: '学习学习再学习'
    }
  }
}
</script>

<style scoped>
    .hw{
        color: blue
    }
</style>
