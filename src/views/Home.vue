<template>
  <div class="home">
    <div class="nav">
      <van-nav-bar title="校园失物招领系统" class="nav-bar" fixed />
    </div>
    <tab></tab>
    
  </div>
</template>

<script>
import Tab from '../components/Tab.vue'
  export default {
    name: 'Home',
    components: {Tab},
    data() {
      return {
        active:'announcement'
      }
    },
    methods: {
      changeIndex(data) {
        this.$router.push('/' + data)
      }
    }
  }
</script>

<style lang="less" scoped>
  .home {
    position: relative;
    height: 100%;

    .midContent {
      position: absolute;
      top: 46px;
      width: 100%;
      overflow: hidden;
    }
  }
</style>