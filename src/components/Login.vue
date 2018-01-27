<template>
  <el-container class="login">
      <el-card class="login-form">
        <div slot="header" class="clearfix">
        <b><span>欢迎登录</span></b>
  </div>
      <el-form :model="form">
        <el-form-item>
        <el-input size="small" placeholder="username" v-model="input3">
        <template slot="prepend">用户名:</template>
        </el-input>
        </el-form-item>
        <el-form-item>
        <el-input size="small" type="password" placeholder="password" v-model="input3">
        <template slot="prepend">密码:</template>
        </el-input>
        </el-form-item>
        <el-button size="small" style="width:100%" native-type="submit" type="primary">主要按钮</el-button>
      </el-form>
      </el-card>
  </el-container>
</template>

<script>
export default {
  data() {
      return {
          form: {
              name: '',
              password: ''
          }
      }
  },
}
</script>

<style>
.login {
    width: 100%;
    height: 100%;
    background-image: url('../assets/login_bg.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
}
.login-form {
    position: absolute;
    right: 160px;
    top: 50%;
    transform: translateY(-60%);
    width: 300px;
    background: #fff;
    padding: 5px;
}
</style>

