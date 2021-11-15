<template>
  <div class="tab">
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">寻找</van-tabbar-item>
      <van-tabbar-item icon="bullhorn-o">发布</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import {
    Tabbar,
    TabbarItem
  } from 'vant';
  export default {
    name: 'Tab',
    components:{
      Tabbar,
      TabbarItem
    },
    data() {
      return {
        active:0
      }
    },
    methods: {
      onChange() {
        this.$emit('active',this.active)
      }
    }
  }
</script>

<style>

</style>