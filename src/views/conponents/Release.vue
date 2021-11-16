<template>
  <div class="release">
    <van-form @submit="submit">
      <van-field v-model="formData.title" name="失物名称" label="失物名称" placeholder="失物名称" />
      <van-field v-model="formData.qqnumber" name="QQ" label="QQ" placeholder="QQ账号" />
      <van-field v-model="formData.wxnumber" name="微信" label="微信" placeholder="微信账号" />
      <van-field v-model="formData.phone" name="联系电话" label="联系电话" placeholder="联系电话" :rules="[{ required: true, message: '请填写联系电话' }]" />
      <van-field name="uploader" label="图片上传">
        <template #input>
          <van-uploader v-model="formData.uploader" />
        </template>
      </van-field>
      <van-field v-model="formData.message" rows="2" autosize label="失物描述" type="textarea" maxlength="150" placeholder="请输入描述"
        show-word-limit :rules="[{ required: true, message: '请填写失物描述' }]" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="submit">发布</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from 'vant';
  export default {
    name: 'Release',
    data() {
      return {
        active: 3,
        formData:{
          title:'',
          qqnumber:'',
          wxnumber:'',
          phone:'',
          uploader:[],
          message:''
        }
      };
    },
    methods: {
      submit() {
        Toast.success('发布成功');
      }
    }
  }
</script>

<style lang="less" scoped>
  .release {
    margin-top: 46px;
  }
</style>