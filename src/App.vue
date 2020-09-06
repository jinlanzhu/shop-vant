<template>
  <div id="app">
    <home />
    <router-view />
  </div>
</template>

<script>
import Home from '@/views/home/Home.vue'
export default {
  data() {},
  components: {
    Home
  }
}
</script>

<style>
</style>
