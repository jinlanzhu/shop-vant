<template>
  <div id="home">
    <!-- 导航 -->
    <van-nav-bar class="nav-bar" fixed border title="购物街"></van-nav-bar>
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了">
        <!-- 轮播图 -->
        <home-swipe :banners="banners" />
        <!-- 推荐 -->
        <recommend-view :recommend-list="recommendList" />
        <!-- 特征图 -->
        <feature-view />
        <tab-control :titles="titles" @tabClick="tabClick">
          <goods-list :goods="goods[this.currentType]" class="goods" slot="goods-list" />
        </tab-control>
        <!-- <van-tabs v-model="active" @click="tabClick">
        <van-tab :title="item.title" :name="item.name" v-for="(item, index) in titles" :key="index">
          <goods-list :goods="goods['pop']" class="goods" />
        </van-tab>
        </van-tabs>-->
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from '@/network/home.js'

import HomeSwipe from './childComps/HomeSwipe'
import FeatureView from './childComps/FeatureView'
import RecommendView from './childComps/RecommendView'

import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'

export default {
  name: 'Home',
  data() {
    return {
      active: 'pop',
      //下拉刷新
      isLoading: false,
      loading: false,
      finished: false,
      //轮播图数据
      banners: [],
      //推荐
      recommendList: [],
      //tabControl的标题
      titles: [
        { title: '流行', name: 'pop' },
        { title: '新款', name: 'new' },
        { title: '精选', name: 'sell' }
      ],
      //商品数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop'
    }
  },
  components: {
    HomeSwipe,
    FeatureView,
    RecommendView,
    TabControl,
    GoodsList
  },
  computed: {
    //展示 当前类型 的商品数据
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /**
     * 获取轮播图等数据
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res)
        this.banners = res.data.banner.list
        this.recommendList = res.data.recommend.list
        console.log(this.recommendList)
      })
      // this.$axios
      //   .get('http://152.136.185.210:8000/api/z8/home/multidata')
      //   .then(res => {
      //     console.log(res)
      //   })
    },
    //刷新
    onRefresh() {
      // 清空列表数据
      this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.isLoading = false
    },
    //请求首页goods数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        console.log(this.goods['pop'])
      })
    },
    //监听 tabControl 的tab事件
    tabClick(type) {
      this.currentType = type
    }
  }
}
</script>

<style scoped>
.van-nav-bar {
  color: #fff;
  background: #ff8198;
}
</style>
