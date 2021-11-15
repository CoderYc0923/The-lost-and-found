<template>
  <div class="search">
    <div class="cardList" v-for="(item,index) in dataList" :key="index">
      <van-card :footer="item.data" :desc="item.message" :title="item.title" :thumb="item.uploader">
        <template #footer>{{ item.data }}</template>
      </van-card>
    </div>
  </div>
</template>

<script>
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
          title: '111',
          uploader: "https://img01.yzcdn.cn/vant/ipad.jpeg",
          message: '1111',
          data: '2021.11.15'
        },
        {
          title: '111',
          uploader: "https://img01.yzcdn.cn/vant/ipad.jpeg",
          message: '1111',
          data: '2021.11.15'
        },
        {
          title: '111',
          uploader: "https://img01.yzcdn.cn/vant/ipad.jpeg",
          message: '1111',
          data: '2021.11.15'
        },
        {
          title: '111',
          uploader: "https://img01.yzcdn.cn/vant/ipad.jpeg",
          message: '1111',
          data: '2021.11.15'
        },
        {
          title: '111',
          uploader: "https://img01.yzcdn.cn/vant/ipad.jpeg",
          message: '1111',
          data: '2021.11.15'
        },
        {
          title: '111',
          uploader: "https://img01.yzcdn.cn/vant/ipad.jpeg",
          message: '1111',
          data: '2021.11.15'
        },
        {
          title: '111',
          uploader: "https://img01.yzcdn.cn/vant/ipad.jpeg",
          message: '1111',
          data: '2021.11.15'
        }
        ]
      }
    }
  }
</script>

<style>

</style>