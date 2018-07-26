<template>
  <xxb-layout class="demo-jsBridge">
  	<xxb-navbar class="top">
  		<div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
  		<div slot="center"><p>JsBridge</p></div>
  	</xxb-navbar>
  	
	</xxb-layout>
</template>

<script>
import XXB from '../utils/jsApi'

export default {
  name: 'demo-jsBridge',

  data () {
    return {

    }
  },

  created(){
    let xxb = new XXB;
    console.log('xxb:',xxb.getBrowser({key:'123456'}))
  }
}
</script>

<style scoped lang="less">

</style>