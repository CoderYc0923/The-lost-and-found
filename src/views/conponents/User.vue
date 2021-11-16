<template>
  <div class="user">
    <div class="bg">
      <div class="avatar"></div>
    </div>
    <div class="btn" v-if="isLogin === false">
      <van-button round block type="info" native-type="submit" @click="showRegister" class="register">注册</van-button>
      <van-button round block type="info" native-type="submit" @click="showLogin" class="login">登录</van-button>
    </div>
    <van-action-sheet v-model="showreg" title="注册">
      <div class="content">
        <van-form @submit="onRegister">
          <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]" />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">注册</van-button>
          </div>
        </van-form>
      </div>
    </van-action-sheet>
    <van-action-sheet v-model="showlog" title="登录">
      <div class="content">
        <van-form @submit="onLogin">
          <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]" />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">登录</van-button>
          </div>
        </van-form>
      </div>
    </van-action-sheet>
  </div>

</template>

<script>
  import {
    Toast
  } from 'vant';
  export default {
    name: 'User',
    data() {
      return {
        isLogin: false,
        showreg: false,
        showlog: false,
        username: '',
        password: '',
      }
    },
    methods: {
      showRegister() {
        this.showreg = true;
      },
      onRegister() {
        Toast.success('注册成功');
        this.showreg = false
        this.isLogin = true
      },
      showLogin() {
        this.showlog = true;
      },
      onLogin() {
        Toast.success('登录成功');
        this.showlog = false
        this.isLogin = true
      },
    }
  }
</script>

<style lang="less" scoped>
  .user {
    margin-top: 46px;
    .bg {
      background-color: #999;
      position: relative;
      height: 400px;

      .avatar {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 150px;
        height: 150px;
        background-color: #fff;
        border-radius: 50%;
      }
    }

    .btn {
      margin-top: 100px;

      .register,
      .login {
        width: 200px;
        height: 30px;
        margin-left: 110px;
      }

      .register {
        margin-bottom: 10px;
      }
    }
  }
</style>