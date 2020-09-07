<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="item.title" />
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    banners: {
      type: Array
    }
  },
  components: {}
}
</script>

<style scoped>
.van-swipe {
  padding-top: 46px;
}
.van-swipe-item img {
  width: 100%;
}
</style>
