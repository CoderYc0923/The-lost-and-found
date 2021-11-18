<template>
  <div class="announcement">
    <van-tabs v-model="active">
      <van-tab title="招领">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="item in list" :key="item" :title="item" @click="showDetail(item)" />
        </van-list>
      </van-tab>
      <van-tab title="已领取">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="item in list" :key="item" :title="item" @click="showDetail(item)" />
        </van-list>
      </van-tab>
    </van-tabs>
    <van-overlay :show="show" @click="showClose">
      <div class="wrapper" @click.stop>
        <div class="block">
          <van-steps direction="vertical" :active="showActive" class="content">
            <van-step>
              <h3>失物等待招领</h3>
              <p>发布者：xxx</p>
              <p>联系方式：xxx</p>
              <p>2016-07-12 12:40</p>
            </van-step>
            <van-step>
              <h3>失物已招领</h3>
              <p>联系方式：xxx</p>
              <p>2016-07-13 10:00</p>
            </van-step>
          </van-steps>
        </div>
      </div>
    </van-overlay>
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
        show: false,
        showActive: 0,
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
      showDetail(item) {
        this.show = !this.show
        this.showActive = 1
      },
      showClose() {
        this.show = !this.show
      }
    }
  }
</script>

<style lang="less" scoped>
  .announcement {
    margin-top: 46px;

    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      .block {
        width: 220px;
        height: 420px;
        background-color: #fff;
        border-radius: 10px;

        .content {
          width: 100%;
          height: 100%;
          background-color: #fff;
          border-radius: 10px;
        }
      }
    }
  }
</style>