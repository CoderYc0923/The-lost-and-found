<template>
  <div class="user">
    <div class="bg">
      <div class="avatar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'User'
}
</script>

<style lang="less" scoped>
  .bg {
    background-color: #999;
    position: relative;
    height: 400px;
    .avatar {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 150px;
      height: 150px;
      background-color: #fff;
      border-radius: 50%;
    }
  }
</style>