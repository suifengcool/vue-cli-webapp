<template>
  <xxb-layout class="demo-cell">
  	<xxb-navbar class="top">
  		<div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
  		<div slot="center">Picker</div>
  	</xxb-navbar>
    
    <xxb-btn size="large" @click.native="openPicker">Picker</xxb-btn>
    
  	<xxb-picker 
      :ready="pickerReady" 
      @showPicker="showPicker" 
      emitEventName="showPicker"
      title="点餐"
      :data="pickerData"
    ></xxb-picker>

	</xxb-layout>
</template>

<script>

export default {
  name: 'demo-cell',

  data () {
    return {
      pickerReady: false,           // 是否开启Picker
      pickerData: [{
        id: 1,
        text: '金针菇'
      },{
        id: 2,
        text: '韭菜'
      },{
        id: 3,
        text: '黄瓜'
      },{
        id: 4,
        text: '茄子'
      },{
        id: 5,
        text: '羊肉串'
      },{
        id: 5,
        text: '鸡爪'
      },{
        id: 6,
        text: '烤鲫鱼'
      },{
        id: 7,
        text: '烤馒头'
      },{
        id: 8,
        text: '炒花甲'
      },{
        id: 9,
        text: '花生米'
      },{
        id: 10,
        text: '毛豆'
      }]
    }
  },

  methods:{
    openPicker(){
      this.pickerReady = true
    },

    showPicker(val){
      this.pickerReady = val
    }
  }
}
</script>

<style scoped lang="less">
.demo-cell{
  padding: 2.25rem .65rem 0 .65rem;
}
</style>