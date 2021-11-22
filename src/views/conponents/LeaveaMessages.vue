<template>
  <div class="message">
    <van-badge :content="count" max="99">
      <div class="child title">评论区</div>
    </van-badge>
    <div class="message-content">
      <div class="message-item" v-for="(item,index) in dataList" :key="index" @click="toMessageContent(item)">
        <div class="left">
          <span class="profile"><img :src="item.profileURL" alt="profile"></span>
        </div>
        <div class="right">
          <div class="title">{{ item.username }}</div>
          <div class="message">{{ item.message }}</div>
          <div class="footer">
            <div class="date">{{ item.date }}</div>
            <div class="re-btn"><span>{{ total }}</span>回复</div>
          </div>
        </div>
      </div>
    </div>
    <van-action-sheet v-model="show" title="回复详情">
      <div class="content">
        <div class="poster">
          <div class="left">
            <span class="profile"><img :src="detailList.profileURL" alt="profile"></span>
          </div>
          <div class="right">
            <div class="title">{{ detailList.username }}</div>
            <div class="message">{{ detailList.message }}</div>
            <div class="date">{{ detailList.date }}</div>
          </div>
        </div>
        <div class="divide"></div>
        <div class="re-title">全部回复 <span>{{ total }}</span></div>
        <div class="childMessage">
          <div class="child-item" v-for="(item,index) in detailList.children" :key="index">
            <div class="left">
              <span class="profile"><img :src="item.profileURL" alt="profile"></span>
            </div>
            <div class="right">
              <div class="title">{{ item.username }}</div>
              <div class="message">{{ item.message }}</div>
              <div class="date">{{ item.date }}</div>
            </div>
          </div>
        </div>
        <div class="speak">
          <form action="/">
            <van-search left-icon="comment-o" v-model="value" show-action placeholder="我来说两句" @search="onSearch" @cancel="onCancel" action-text="发言"/>
          </form>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    data() {
      return {
        dataList: [{
            profileURL: "https://img01.yzcdn.cn/vant/ipad.jpeg",
            username: 'user1',
            message: "评论内容1",
            date: '2021.11.22'
          },
          {
            profileURL: "https://img01.yzcdn.cn/vant/ipad.jpeg",
            username: 'user2',
            message: "评论内容2",
            date: '2021.11.22'
          },
          {
            profileURL: "https://img01.yzcdn.cn/vant/ipad.jpeg",
            username: 'user3',
            message: "评论内容3",
            date: '2021.11.22'
          },
        ],
        count: 3,
        show: false,
        detailList: {
          profileURL: "",
          username: '',
          message: "",
          date: '',
          children: [{
              profileURL: "https://img01.yzcdn.cn/vant/ipad.jpeg",
              username: 'user22',
              message: "回复测试1",
              date: '2021.11.22'
            },
            {
              profileURL: "https://img01.yzcdn.cn/vant/ipad.jpeg",
              username: 'user233',
              message: "回复测试2",
              date: '2021.11.22'
            },
            {
              profileURL: "https://img01.yzcdn.cn/vant/ipad.jpeg",
              username: 'user233',
              message: "回复测试2",
              date: '2021.11.22'
            },
            {
              profileURL: "https://img01.yzcdn.cn/vant/ipad.jpeg",
              username: 'user233',
              message: "回复测试2",
              date: '2021.11.22'
            },
            {
              profileURL: "https://img01.yzcdn.cn/vant/ipad.jpeg",
              username: 'user233',
              message: "回复测试2",
              date: '2021.11.22'
            },
          ]
        },
        total: 0,
        value: ''
      }
    },
    mounted() {
      this.total = this.detailList.children.length
    },
    methods: {
      toMessageContent(item) {
        this.show = true
        this.detailList = Object.assign(this.detailList, item)
        this.total = this.detailList.children.length
      },
      onSearch() {

      },
      onCancel() {

      },
    }
  }
</script>

<style lang="less" scoped>
  .message {
    .child {
      width: 60px;
    }

    .message-item,
    .child-item,
    .poster {
      margin-bottom: 20px;
      display: flex;

      .left {
        margin-top: 10px;
        margin-left: 10px;

        .profile {
          display: inline-block;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          border: .5px solid rgba(0, 0, 0, .1);

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }

      }

      .right {
        width: 340px;
        margin-left: 5px;

        .title {
          font-size: 16px;
          line-height: 30px;
        }

        .message {
          font-size: 14px;
        }

      }

    }

    .childMessage {
      height: 350px;
      overflow-y: scroll;
    }

    .speak {
      border-top: .5px solid #F7F8F9;
    }

    .footer {
      display: flex;

      .date {
        margin-top: 5px;
        margin-right: 10px;
        font-size: 12px;
        color: #8f9294;
      }

      .re-btn {
        display: inline-block;
        width: 50px;
        height: 20px;
        border-radius: 10px;
        line-height: 20px;
        text-align: center;
        background-color: rgb(233, 223, 223);
        color: #8f9294;
      }
    }
    
    .divide {
      height: 0;
      margin: 0 15px;
      border: .5px solid #F7F8F9;
    }

    .re-title {
      margin-top: 5px;
      margin-left: 5px;

      span {
        color: #8f9294;
      }
    }
  }
</style>