<template>
  <xxb-layout class="demo-pull-down" >
    <xxb-navbar class="top">
      <div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
      <div slot="center"><p>PullDown</p></div>
    </xxb-navbar>

    <xxb-pull-down :onRefresh='onRefresh'>
      <ul class="xxb-pull-content" >
        <li v-for="(item,index) in data" :key="index">{{item.name}}</li>
      </ul>
    </xxb-pull-down>
  </xxb-layout>
</template>
<script>
export default {
  name: 'xxb-pull-index',
  data() {
    return {
      navigation: [{
        name: '全部',
        id: 0
      },{
        name: '限时折扣',
        id: 1
      },{
        name: '智能电器',
        id: 2
      },{
        name: '积分专区',
        id: 3
      }],
      data: [{
        name: '第一条',
        id: 0
      },{
        name: '第二条',
        id: 1
      },{
        name: '第三条',
        id: 2
      },{
        name: '第四条',
        id: 3
      },{
        name: '第五条',
        id: 4
      },{
        name: '第六条',
        id: 5
      },{
        name: '第7条',
        id: 6
      },{
        name: '第8条',
        id: 7
      },{
        name: '第9条',
        id: 8
      },{
        name: '第10条',
        id: 9
      },{
        name: '第11条',
        id: 10
      },{
        name: '第12条',
        id: 11
      },]
    }
  },
  methods:{
    // 数据更新事件
    onRefresh(done){
      setTimeout(()=>{
        // 关闭刷新
        done();
      },2000)
    }
  },
}
</script>
<style lang='less'>
.xxb-pull-down{
  padding-top: 2.25rem;
  .xxb-pull-content{
    height: 400px;
    overflow: hidden;
    overflow-y: auto;
    li{
      padding: 2rem 0;
    }
  }
}
</style>

