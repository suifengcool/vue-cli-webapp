<template>
  <xxb-layout class="demo-navbar">
  	<xxb-navbar class="top">
  		<div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
  		<div slot="center"><p>Navbar</p></div>
  	</xxb-navbar>
  	<ul>
  		<li v-for="n in 30">
        <xxb-cell-item>
          <i class="iconfont icon-wallet" slot="icon"></i>
          <span slot="left">看扶摇</span>
          <span slot="right"><i class="iconfont icon-right"></i></span>
        </xxb-cell-item>
      </li>
  	</ul>
	</xxb-layout>
</template>

<script>

export default {
  name: 'demo-navbar',

  data () {
    return {

    }
  }
}
</script>

<style scoped lang="less">
.demo-navbar{
  padding-top: 2.25rem;
}
ul>li{
  height: 2rem;
  line-height: 2rem;
  padding: 0 .65rem;
}
</style>