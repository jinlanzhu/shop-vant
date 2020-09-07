<template>
  <div class="recommend-view">
    <!-- <div v-for="(item, index) in recommendList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>-->
    <van-row type="flex" justify="space-around">
      <van-col v-for="(item, index) in recommendList" :key="index" span="5">
        <a :href="item.link">
          <img :src="item.image" alt />
          <div>{{item.title}}</div>
        </a>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    recommendList: {
      type: Array
    }
  },
  components: {}
}
</script>

<style scoped>
.recommend-view {
  border-bottom: 10px solid #f8f6f6;
}
img {
  width: 100%;
}
</style>
