<template>
  <div id="networkWeakStatus">
    <div class="dummyStatus-box">
      <div class="img-box">
        <img :src="this.imgSrc || require('../assets/network_weak.png')" alt="">
      </div>
      <p>{{this.text || '没有网络哦~'}}</p>
      <h3>请检查网络，或者<i @click="reload">刷新试试</i></h3>
    </div>
  </div>
</template>
<script>
export default {
  name: 'networkWeakStatus',
  props: [
    'text',    // 空状态提示语
    'imgSrc'   // 空状态提示图
  ],

  created(){
    vm.config.title('暂无网络')
  },

  methods:{
    reload(){
      window.location.reload(true)
    }
  }
}
</script>
<style lang="sass" scoped>
#networkWeakStatus
  background: #fff
  height: 100vh
  .dummyStatus-box 
    text-align: center
    z-index: 1000000
    position: absolute
    left: 50%
    top: 24%
    transform: translateX(-50%)
    .img-box
      overflow: hidden
      width: 7.2rem
      img
        width: 100% 
    p 
      font-size: .7rem
      color: #979797 
      margin-top: 1.15rem 
    h3 
      font-size: .75rem
      color: #333
      margin-top: 1rem
      font-weight: 300
      i 
        color: #7dc0ff
</style>