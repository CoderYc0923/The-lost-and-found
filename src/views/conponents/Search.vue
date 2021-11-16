<template>
  <div class="search">
    <div class="cardList" v-for="(item,index) in dataList" :key="index">
      <van-card :footer="item.data" :desc="item.message" :title="item.title" :thumb="item.uploader" @click="toDetail(item)">
        <template #footer>{{ item.data }}</template>
      </van-card>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
  export default {
    name: 'Search',
    data() {
      return {
        dataList: [{
          title: '111',
          uploader: "https://img01.yzcdn.cn/vant/ipad.jpeg",
          message: '1111',
          data: '2021.11.15'
        },
        {
          title: '222',
          uploader: "https://img01.yzcdn.cn/vant/ipad.jpeg",
          message: '2222',
          data: '2021.11.15'
        },
        {
          title: '333',
          uploader: "https://img01.yzcdn.cn/vant/ipad.jpeg",
          message: '3333',
          data: '2021.11.15'
        },
        {
          title: '444',
          uploader: "https://img01.yzcdn.cn/vant/ipad.jpeg",
          message: '4444',
          data: '2021.11.15'
        },
        {
          title: '555',
          uploader: "https://img01.yzcdn.cn/vant/ipad.jpeg",
          message: '5555',
          data: '2021.11.15'
        },
        {
          title: '666',
          uploader: "https://img01.yzcdn.cn/vant/ipad.jpeg",
          message: '6666',
          data: '2021.11.15'
        },
        {
          title: '777',
          uploader: "https://img01.yzcdn.cn/vant/ipad.jpeg",
          message: '7777',
          data: '2021.11.15'
        },
        {
          title: '888',
          uploader: "https://img01.yzcdn.cn/vant/ipad.jpeg",
          message: '8888',
          data: '2021.11.15'
        }
        ]
      }
    },
    methods: {
      ...mapActions(['SetData']),
      toDetail(item) {
        this.SetData(item)
        this.$router.push('/detail')
      }
    }
  }
</script>

<style lang="less" scoped>
.search {
    margin-top: 46px;
  }
</style>