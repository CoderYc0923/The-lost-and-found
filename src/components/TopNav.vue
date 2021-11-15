<template>
  <div class="nav">
    <van-nav-bar title="校园失物招领系统" class="nav-bar" fixed/>
  </div>
</template>

<script>
  import {
    NavBar
  } from 'vant';
  export default {
    name: 'TopNav',
    components: {
      NavBar
    }
  }
</script>

<style lang="less" scoped>
  ::v-deep .van-nav-bar__title {
    font-weight: 700;
  }
</style>