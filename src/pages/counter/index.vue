<template>
  <div class="counter-warp">
    <button class="weui-btn mini-btn" type="default" @click="huoqu">获取</button>
    <div class="page__bd page__bd_spacing">

      <div class="weui-flex" >
        <div class="weui-flex__item"  >
          <div class="placeholder">
            <table  v-for="u in user" :key="user.userId" v-if="index==0">
               <!--<tr>-->
                 <!--<td>-->
                   <!--{{u.userName}}-->
                 <!--</td>-->
            </table>

          </div>
      </div>
      </div>

      <div class="weui-flex">
        <div class="weui-flex__item" >
          <div class="placeholder">
          <img src="../../../static/timg.jpg"/>
        </div>
        </div>

        <div class="weui-flex__item" >
          <div class="placeholder">
            <img src="../../../static/timg.jpg"/>
          </div>
        </div>
        <div class="weui-flex__item" >
          <div class="placeholder">
            <img src="../../../static/timg.jpg"/>
          </div>
        </div>
      </div>

    </div>
  <router></router>
  </div>
</template>

<script>
// Use Vuex
import store from './store'
export default {
  data () {
    return {
      user: [
      ]
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    huoqu () {
      var t = this
      wx.request({
        url: 'http://127.0.0.1:8081/User/findallUser',
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data[1])
          for (var i = 0; i < res.data.length; i++) {
            t.user.push(res.data[i])
          }
        }
      })
    },
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
  img{
    width: 120px;
    height: 80px;
    padding: 5rpx;
  }
</style>
