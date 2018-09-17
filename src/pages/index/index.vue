<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
      <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

      <p>账号</p> <input type="text"  class="form-control" v-model="loginName" />
      <p>密码</p> <input type="password"   class="form-control" v-model="loginPassword" />
      <a  class="counter" @click="yanzheng">验证</a>
      <a href="/pages/counter/main" class="counter">录入</a>
    </form>
  </div>
</template>
<script>
import card from '@/components/card'
import axios from 'axios'
export default {
  props: ['loginName', 'loginPassword'],
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },
  components: {
    card
  },

  methods: {
    yanzheng () {
      axios.defaults.headers.common['X-Requested-with'] = 'XMLHttpRequest'
      console.log(this.loginName + '||' + this.loginPassword)
      console.log('loginName:' + this.loginName)
      console.log('loginPassword' + this.loginPassword)

      // this.$axios({
      //   method: 'post',
      //   url: 'http://http://localhost:8081/User/login',
      //   data: {
      //     loginName: this.loginName,
      //     loginPassword: this.loginPassword
      //   }
      // })
      axios.defaults.adapter = function (config) {
        return new Promise((resolve, reject) => {
          console.log(config)
          wx.request({
            url: config.url,
            data: {
              name: config.params.name
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
      axios.get('http://39.107.64.77:8888/get_data/', {
        params: {
          name: this.loginName
        }
      })
        .then(function (respone) {
          console.log(respone)
        })
        .catch(function (error) {
          console.log(error)
        })
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

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
