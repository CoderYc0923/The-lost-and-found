<template>
  <div class="announcement">
    <van-tabs v-model="active">
      <van-tab title="招领">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
      </van-tab>
      <van-tab title="已领取">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
  export default {
    name: 'Announcement',
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        active: 0,
      }
    },
    methods: {
      onLoad() {
        setTimeout(() => {
          for (let i = 0; i < 11; i++) {
            this.list.push(this.list.length + 1);
          }

          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      },
    }
  }
</script>

<style lang="less" scoped>
.announcement {
  margin-top: 46px;
}
</style>