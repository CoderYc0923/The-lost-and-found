<template>
  <div class="home">
    <top-nav></top-nav>
    <announcement v-if="active === 0" class="midContent"></announcement>
    <search v-if="active === 1" class="midContent"></search>
    <release v-if="active === 2" class="midContent"></release>
    <user v-if="active === 3" class="midContent"></user>
    <tab @active="changeIndex"></tab>
  </div>
</template>

<script>
  import Tab from '../components/Tab'
  import TopNav from '../components/TopNav.vue'

  import Announcement from './conponents/Announcement.vue'
  import Release from './conponents/Release'
  import Search from './conponents/Search'
  import User from './conponents/User'

  export default {
    name: 'Home',
    components: {
      Tab,
      TopNav,
      Announcement,
      Release,
      Search,
      User
    },
    data() {
      return {
        active: 0
      }
    },
    methods: {
      changeIndex(data) {
        this.active = data
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