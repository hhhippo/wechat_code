<template>
  <div class="inde-main">
    <SearchBar></SearchBar>
    <!--<img class="index-img" src="../../../static/img/index2.jpg"/>-->
    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" duration="1000">
      <block v-for="(item, index) in images" :index="index" :key="key">
        <swiper-item>
          <image :src="item.url" class="slide-image" mode="aspectFill"/>
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import login from './'
export default {
  props: ['loginName', 'loginPassword'],
  data () {
    return {
      images: [
        {
          url:
            '/static/img/index2.jpg'
        },
        {
          url:
            '/static/img/index3.jpg'
        }
      ]
    }
  },
  components: {
    SearchBar, login
  },

  methods: {
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
.index-img{
  height: 300rpx;
  width: 100%;
}
.index-main {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
  .top-img{
    width: 100%;
    margin: 0px;
    padding: 0px;
    text-align: center;
  }
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
image {
  height: 100%;
  width: 100%;
}
</style>
