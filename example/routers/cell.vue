<template>
  <xxb-layout class="demo-cell">
  	<xxb-navbar class="top">
  		<div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
  		<div slot="center"><p>Cell</p></div>
  	</xxb-navbar>
    
    <xxb-cell-item>
      <i class="iconfont icon-wallet" slot="icon"></i>
      <span slot="left">我的钱包</span>
      <span slot="right"><i class="iconfont icon-right"></i></span>
    </xxb-cell-item>

    <xxb-cell-item>
      <i class="iconfont icon-activity" slot="icon"></i>
      <span slot="left">活动专区</span>
      <span slot="right"><i class="iconfont icon-right"></i></span>
    </xxb-cell-item>

    <xxb-cell-item>
      <i class="iconfont icon-wodehongbao" slot="icon"></i>
      <span slot="left">邀请有奖</span>
      <span slot="right"><i class="iconfont icon-right"></i></span>
    </xxb-cell-item>

    <xxb-cell-item>
      <i class="iconfont icon-jinlingyingcaiwangtubiao07" slot="icon"></i>
      <span slot="left">我的积分</span>
      <span slot="right"><i class="iconfont icon-right"></i></span>
    </xxb-cell-item>

    <xxb-cell-item>
      <i class="iconfont icon-kefu-pressed" slot="icon"></i>
      <span slot="left">在线客服</span>
      <span slot="right"><i class="iconfont icon-right"></i></span>
    </xxb-cell-item>

    <xxb-cell-item>
      <i class="iconfont icon-youxi" slot="icon"></i>
      <span slot="left">智力游戏</span>
      <span slot="right"><i class="iconfont icon-right"></i></span>
    </xxb-cell-item>

    <xxb-cell-item>
      <i class="iconfont icon-guanyu" slot="icon"></i>
      <span slot="left">关于我们</span>
      <span slot="right"><i class="iconfont icon-right"></i></span>
    </xxb-cell-item>

    <xxb-cell-item>
      <i class="iconfont icon-shezhi" slot="icon"></i>
      <span slot="left">设置</span>
      <span slot="right"><i class="iconfont icon-right"></i></span>
    </xxb-cell-item>
  	
	</xxb-layout>
</template>

<script>

export default {
  name: 'demo-cell',

  data () {
    return {

    }
  }
}
</script>

<style scoped lang="less">
.demo-cell{
  padding-top: 2.25rem;
}
</style>