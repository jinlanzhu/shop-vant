<template>
  <div class="tab-bar">
    <tab-bar-item></tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'
export default {
  data() {
    return {
      active: 'home'
    }
  },
  components: {
    TabBarItem
  }
}
</script>

<style scoped>
</style>
