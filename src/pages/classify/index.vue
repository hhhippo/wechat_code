<template>
  <div class="container">
    <ul class="nav-left" >
      <div v-for="item in level" :key="item.cate_id">
        <div  class="nav_left_item" :class="current === item.cate_id ? 'active' : ''" :data-id='item.cate_id' :data-index='index' @click="Select">
          {{item.cate_name}}
        </div>
      </div>
    </ul >

    <div class="nav-right">
        <div class="nav_right_container" v-if="level[index].ishaveChild">
            <div v-for="children in level[index].children" :key="children.child_id">
                <div class="nav_right_item"  :data-index='index' :data-id='children.child_id' @click="commodity">
                  <image class='image' :src="children.image"></image>
                  <text class='text'>{{children.name}}</text>
                </div>
            </div>
        </div>
      <div v-else>
        该类暂无数据
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        level: [
          {
            cate_id: 1,
            cate_name: '护肤',
            ishaveChild: true,
            children:
              [
                {
                  child_id: 1,
                  name: '洁面皂',
                  image: '../../static/img/1-1.jpg'
                },
                {
                  child_id: 2,
                  name: '卸妆',
                  image: '../../static/img/1-2.jpg'
                },
                {
                  child_id: 3,
                  name: '洁面乳',
                  image: '../../static/img/1-3.jpg'
                },
                {
                  child_id: 4,
                  name: '面部祛角质',
                  image: '../../static/img/1-4.jpg'
                }
              ]
          },
          {
            cate_id: 2,
            cate_name: '彩妆',
            ishaveChild: true,
            children:
              [
                {
                  child_id: 1,
                  name: '气垫bb',
                  image: '../../static/img/2-1.jpg'
                },
                {
                  child_id: 2,
                  name: '修容/高光',
                  image: '../../static/img/2-2.jpg'
                },
                {
                  child_id: 3,
                  name: '遮瑕',
                  image: '../../static/img/2-3.jpg'
                },
                {
                  child_id: 4,
                  name: '腮红',
                  image: '../../static/img/2-4.jpg'
                },
                {
                  child_id: 5,
                  name: '粉饼',
                  image: '../../static/img/2-5.jpg'
                },
                {
                  child_id: 6,
                  name: '粉底',
                  image: '../../static/img/2-6.jpg'
                },
                {
                  child_id: 7,
                  name: '蜜粉/散粉',
                  image: '../../static/img/2-7.jpg'
                },
                {
                  child_id: 8,
                  name: '隔离霜',
                  image: '../../static/img/2-8.jpg'
                }
              ]
          },
          {
            cate_id: 3,
            cate_name: '香水/香氛',
            ishaveChild: true,
            children:
              [
                {
                  child_id: 1,
                  name: '淡香水EDT',
                  image: '../../static/img/3-1.jpg'
                },
                {
                  child_id: 2,
                  name: '浓香水EDP',
                  image: '../../static/img/3-2.jpg'
                },
                {
                  child_id: 3,
                  name: '香体走珠',
                  image: '../../static/img/3-3.jpg'
                },
                {
                  child_id: 4,
                  name: '古龙香水男士的最爱',
                  image: '../../static/img/3-4.jpg'
                }
              ]
          },
          {
            cate_id: 4,
            cate_name: '个人护理',
            ishaveChild: false,
            children: []
          }
        ],
        current: 1, // 当前选中的cate_id
        index: 0 // 当前选中的index
      }
    },
    computed: {},
    methods: {
      onLoad: function (options) {
      },
      Select (e) {
        this.current = e.target.dataset.id
        this.index = e.target.dataset.index
        console.log(e)
        console.log(e.target.dataset.index)
      },
      commodity (e) {
        console.log(e)
        console.log(e.target.dataset.index)
        console.log(e.target.dataset.id)
      }
    }
  }
</script>

<style>
  .container{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: row;
    padding: 0 0 ;
    align-items: flex-start;
  }
  .nav-left {
    /*display:flex;*/
    /*flex-direction: column;*/
    /*width: 25%;*/
    /*height: 100%;*/
    /*background: #f1f1f1;*/
    /*padding: 5px;*/
    width : 25%;
    height: 100%;
    background: #f5f5f5;
  }

  .nav-right {
    width: 75%;
  }
  .nav_left_item {
    /*display: flex;*/
    /*padding: 10px ;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    /*border-bottom: 1px solid #dedede;*/
    /*font-size: 16px;*/
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 42px;
    border-bottom: 1px solid #dedede;
    font-size: 14px;
  }
  .active {
    background-color: #fff;
    color:#e64340;
    border-bottom: 4px solid #c00;
    border-right:none;
  }

  .nav_right_container {
    width:100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .nav_right_item{
    width: 180rpx;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .image {
    width: 90%;
    height: 90%;
  }

  .text {
    width: 100%;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }

</style>
