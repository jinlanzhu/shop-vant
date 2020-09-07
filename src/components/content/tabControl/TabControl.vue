<template>
  <div>
    <van-tabs v-model="active" @click="tabClick" sticky offset-top="46">
      <van-tab :title="item.title" :name="item.name" v-for="(item, index) in titles" :key="index">
        <slot name="goods-list"></slot>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'pop',
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  components: {},
  methods: {
    tabClick(name, title) {
      console.log(name + '---' + title)
      this.$emit('tabClick', name)
    }
  }
}
</script>

<style scoped>
/* .van-tabs {
  top: 46px;
  position: sticky;
} */
</style>
