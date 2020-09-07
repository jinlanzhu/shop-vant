<template>
  <div class="goods-list">
    <van-row>
      <van-col :span="11" v-for="(item, index) in goods.list" :key="index">
        <img :src="item.image || item.show.img" alt />
        <div class="goods-info">
          <p>{{ item.title}}</p>
          <span class="price">￥{{ item.price}}</span>
          <van-icon name="star-o" />
          <span class="collect">{{ item.cfav}}</span>
        </div>
      </van-col>
    </van-row>
    <!-- <van-row type="flex" justify="space-between">
      <van-col :span="12" v-for="(item, index) in goods.list" :key="index">
        <a href>
          <img :src="item.show.img" alt />
        </a>
        <div>{{item.title}}</div>
      </van-col>
    </van-row>-->
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    goods: {
      type: Object
    }
  },
  components: {},
  computed: {}
}
</script>

<style scoped>
img {
  width: 100%;

  border-radius: 5px;
}
.van-col {
  margin: 3px 7px;
}
.goods-info {
  font-size: 12px;
  overflow: hidden;
  text-align: center;
  margin: 5px 0;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
  margin-top: 8px;
}

.goods-info .price {
  color: #ff5777;
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  /* background: url('assets/img/common/collect.svg') 0 0/14px 14px; */
}
</style>
