<template>
  <div>
      <h1>{{ $store.state.count }}</h1>
  </div>
</template>
<script>
import store from '@/vuex/store.js'
export default {
    store,
}
</script>
<style scoped>

</style>

