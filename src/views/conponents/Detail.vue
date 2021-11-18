<template>
  <div class="detail">
    <van-nav-bar title="失物详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="content">
      <div class="top">
        <span class="profile"><img :src="profileURL" alt="profile"></span>
        <span class="title">{{ data.title }}</span>
      </div>
      <div class="message">{{ data.message }}</div>
      <div class="imgList">
        <van-grid :border="false" :column-num="3" square :gutter="10" >
          <van-grid-item v-for="(item,index) of imgList" :key="index" @click="HandleclickImg(index)">
            <van-image :src="item" />
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
  import {
    mapGetters,
    mapActions
  } from "vuex";
  export default {
    name: 'Detail',
    data() {
      return {
        data: {},
        profileURL: '',
        imgList: [
          "https://img01.yzcdn.cn/vant/apple-1.jpg",
          "https://img01.yzcdn.cn/vant/apple-2.jpg",
          "https://img01.yzcdn.cn/vant/apple-3.jpg",
        ]
      }
    },
    mounted() {

    },
    computed: {
      ...mapGetters(['GetData']),
      getDataList() {
        return this.GetData
      }
    },
    watch: {
      getDataList() {
        this.data = this.GetData
        this.profileURL = this.data.uploader
      }
    },
    methods: {
      ...mapActions(['ClearData']),
      onClickLeft() {
        this.$router.push('/search')
      },
      HandleclickImg(index) {
        ImagePreview({
        images: this.imgList,
        startPosition: index,
        closeable: true,
        
      })
      }
    }
  }
</script>

<style lang="less" scoped>
  .detail {
    margin-top: 46px;

    .content {

      .top {
        margin-top: 10px;
        margin-left: 10px;
        position: relative;

        .profile {
          display: inline-block;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: .5px solid rgba(0, 0, 0, .1);

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }

        .title {
          display: inline-block;
          height: 30px;
          position: absolute;
          top: 50%;
          left: 25%;
          transform: translate(-50%, -50%);
          font-size: 18px;
          font-weight: 700;
          text-align: center;
          line-height: 30px;
        }
      }

      .message {
        margin-top: 10px;
        margin-left: 25px;
        font-size: 14px;
      }
    }
  }
</style>