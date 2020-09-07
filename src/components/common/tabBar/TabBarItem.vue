<template>
  <div
    class="tab-bar-item"
    v-if="$route.name == 'Home' || $route.name == 'Category' || $route.name == 'Cart' || $route.name == 'Profile'"
  >
    <!--  -->
    <van-tabbar fixed v-model="active" route>
      <van-tabbar-item
        replace
        v-for="(item, index) in tabBarList"
        :key="index"
        :to="item.path"
        :icon="item.normal"
      >{{ item.title}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabBarList: [
        {
          path: '/home',
          title: '首页',
          normal: 'home-o',
          active: 'wap-home'
        },
        {
          path: '/category',
          title: '分类',
          normal: 'apps-o',
          active: ''
        },
        {
          path: '/cart',
          title: '购物车',
          normal: 'cart-o',
          active: 'cart'
        },
        {
          path: '/profile',
          title: '我的',
          normal: 'user-o',
          active: 'manager'
        }
      ]
    }
  },
  components: {},
  watch: {
    // 监听,当路由发生变化的时候执行
    $route(to) {
      this.activeTab(to.path)
    }
  },
  methods: {
    activeTab(path) {
      console.log(path)
      let index = this.tabBarList.filter(item => item.path).indexOf(path)
      console.log(index)
      if (index !== -1) {
        this.active = index
      }
    }
  }
}
</script>

<style scoped>
</style>
