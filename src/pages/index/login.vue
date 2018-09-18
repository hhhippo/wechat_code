<template>
  <form class="form-container">
    <div class="weui-cell weui-cell_input">
      <div class="weui-cell__hd">
        <div class="weui-label">账号</div>
      </div>
      <div class="weui-cell__bd">
        <input class="weui-input" placeholder="请输入账号" v-model="loginName" />
      </div>
    </div>
    <div class="weui-cell weui-cell_input">
      <div class="weui-cell__hd">
        <div class="weui-label">密码</div>
      </div>
      <div class="weui-cell__bd">
        <input class="weui-input" placeholder="请输入密码" v-model="loginPassword" />
      </div>
    </div>
    <!--<p>账号</p> <input type="text"  class="form-control" v-model="loginName" />-->
    <!--<p>密码</p> <input type="password"   class="form-control" v-model="loginPassword" />-->
        <button class="weui-btn mini-btn" type="primary" size="mini" @click="yanzheng">验证</button>
        <button class="weui-btn mini-btn" type="default" size="mini">录入</button>
  </form>


</template>

<script>
  import axios from 'axios'
  export default {
    props: ['loginName', 'loginPassword'],
    name: 'login',
    methods: {
      yanzheng () {
        axios.defaults.headers.common['X-Requested-with'] = 'XMLHttpRequest'
        console.log(this.loginName + '||' + this.loginPassword)
        console.log('loginName:' + this.loginName)
        console.log('loginPassword' + this.loginPassword)
        axios.defaults.adapter = function (config) {
          return new Promise((resolve, reject) => {
            console.log(config)
            wx.request({
              url: config.url,
              data: {
                loginName: config.params.loginName,
                loginPassword: config.params.loginPassword
              },
              header: {
                'content-type': 'application/json'
              },
              success: function (res) {
                console.log(res.data)
              }
            })
          })
        }
        axios.get('http://127.0.0.1:8081/User/login', {
          params: {
            loginName: this.loginName,
            loginPassword: this.loginPassword
          }
        })
          .then(function (respone) {
            console.log(respone)
          })
          .catch(function (error) {
            console.log(error)
          })
        this.loginName = ''
        this.loginPassword = ''
      },
      bindViewTap () {
        const url = '../logs/main'
        wx.navigateTo({ url })
      },
      getUserInfo () {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo
              }
            })
          }
        })
      },
      clickHandle (msg, ev) {
        console.log('clickHandle:', msg, ev)
      }
    },

    created () {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
    }
  }
</script>

<style scoped>
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .userinfo-avatar {
    width: 128px;
    height: 128px;
    margin: 20px;
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #aaa;
  }

  .usermotto {
    margin-top: 50px;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }

</style>
