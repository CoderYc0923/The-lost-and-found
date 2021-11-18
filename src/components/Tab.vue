<template>
  <div class="tab">
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item name="/announcement" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="/search" icon="search">寻找</van-tabbar-item>
      <van-tabbar-item name="/release" icon="bullhorn-o">发布</van-tabbar-item>
      <van-tabbar-item name="/user" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name:'Tab',
    data() {
      return {
        active: "/announcement"
      }
    },
    mounted() {
      this.onChange()
    },
    methods: {
      onChange() {
        this.$router.push(this.active)
      }
    }
  }
</script>

<style lang="less" scoped>
  ::v-deep .van-nav-bar__title {
      font-weight: 700;
    }
</style>