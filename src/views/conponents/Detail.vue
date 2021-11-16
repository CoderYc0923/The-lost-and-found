<template>
  <div class="detail">
    <van-nav-bar title="详情" left-text="返回" left-arrow @click-left="onClickLeft"
      @click-right="onClickRight" />
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    methods: {
      onClickLeft() {
        this.$router.push('/search')
      }
    }
  }
</script>

<style lang="less" scoped>
.detail {
  margin-top: 46px;
}
</style>