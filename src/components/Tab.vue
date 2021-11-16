<template>
  <div class="tab">
    <van-tabbar route>
      <van-tabbar-item to="/announcement" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/search" icon="search">寻找</van-tabbar-item>
      <van-tabbar-item to="/release" icon="bullhorn-o">发布</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  ::v-deep .van-nav-bar__title {
      font-weight: 700;
    }
</style>