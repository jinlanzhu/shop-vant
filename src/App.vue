<template>
  <div id="app">
    <tab-bar />
    <router-view />
  </div>
</template>

<script>
import TabBar from '@/components/common/tabBar/TabBar.vue'
export default {
  data() {
    return {}
  },
  components: {
    TabBar
  }
}
</script>

<style>
</style>
