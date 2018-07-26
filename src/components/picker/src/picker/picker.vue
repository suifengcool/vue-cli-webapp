<template>
  <xxb-popup v-model="show" @input="input" position="bottom" height="40%">
    <!-- 头部按钮区域 -->
    <div class="xxb-picker-top">
      <span class="xxb-picker-top-btn" @click="close">取消</span>
      <p class="xxb-picker-top-title">{{title}}</p>
      <span class="xxb-picker-top-btn">确定</span>
    </div>

    <!-- 选择区域 -->
    <div class="xxb-picker-wheel-contain">
      <ul 
        class="xxb-picker-wheel-list" 
        :style="{'transform': 'translate(0, ' + top + 'px)'}"
      >
        <li 
          class="xxb-picker-wheel-item"
          v-for="(item,index) in data"
          :key="index"
        >{{item.text}}</li>
      </ul>
      <div class="xxb-picker-wheel-mask xxb-picker-wheel-mask-top"></div>
      <div class="xxb-picker-wheel-mask xxb-picker-wheel-mask-bottom"></div>
      <div 
        class="xxb-picker-wheel-pannel"
        @touchmove="touchMove($event)" 
        @touchstart='touchstart($event)' 
        @touchend="touchEnd($event)"
      ></div>
    </div>
  </xxb-popup>
</template>

<script type="text/babel">
import {Popup} from '../../../popup'

export default {
  name: 'xxb-picker',

  components: {
    'xxb-popup': Popup
  },

  data() {
    return {
      startY: 0,                         // 按下的y抽距离
      startX: 0,                         // 按下的x抽距离
      top: 0,                            // 下拉的距离
    }
  },

  props:{
    ready: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    emitEventName: String,
    data: {
      type: Array,
      default: []
    }
  },

  computed:{
    show: {  
      get: function () {
        return this.ready
      },
      set: function () {
        return this.ready
      }
    }
  },

  methods:{
    // 监听子组件popup点击蒙层关闭弹框事件，并通知父组件关闭picker
    input(val){
      this.$emit(this.emitEventName,val)
    },
    
    // 通知父组件关闭picker
    close(){
      this.$emit(this.emitEventName,false)
    },

    touchstart(e){
      this.startY = e.targetTouches[0].pageY;   // 按下的y抽距离
      this.startX = e.targetTouches[0].pageX;   // 按下的x抽距离

      console.log('this.startY0000:',this.startY)
    },

    touchMove(e){
      // 移动的距离
      let diff = e.targetTouches[0].pageY - this.startY 
      console.log('e.targetTouches[0].pageY:',e.targetTouches[0].pageY)
      console.log('this.startY:',this.startY)
      console.log('diff:',diff)

      if(diff){
　　　　  e.preventDefault()  // 取消事件的默认动作                                      
　　　 }else{
　　　　  return 　　
　　　 }

      // 改变拉取的幅度
      this.top += Math.floor(diff*.25)

      if (this.top > 0) {
        console.log('向下滑')
      }else{
        console.log('向上滑')
      }

      // 设置下拉最大高度
      if(this.top >= 20){
        this.top = 20
      };

      if(this.top <= -350){
        this.top = -350
      };
    },

    touchEnd(e){
      this.startY = 0
      console.log('this.top:',this.top)
    },
  }
}
</script>

<style lang="less">
@import "../../../../styles/mixins";
.xxb-picker-top{
  display: flex;
  justify-content: space-between;
  height: 2rem;
  line-height: 2rem;
  font-size: .75rem;
  position: relative;
  &:after{
    .bottom-line(#dedede);
  }
}
.xxb-picker-top-btn{
  padding: 0 1.5rem;
  &:first-child{
    color: #999;
  }
  &:last-child{
    color: #1494d2;
  }
}
.xxb-picker-top-title{
  flex: 1;
  text-align: center;
  color: #333;
  font-weight: 500;
}

.xxb-picker-wheel-contain{
  height: 10rem;
  overflow: hidden;
  position: relative;
}

.xxb-picker-wheel-mask{
  position: absolute;
  z-index: 100;
  height: 4rem;
  left: 0;
  width: 100%;
  background: linear-gradient(180deg,hsla(0,0%,100%,.4),hsla(0,0%,100%,.8));
  &-top{
    top: 0rem;
    &:after{
      .bottom-line(#dedede);
    }
  }
  &-bottom{
    bottom: 0rem;
    &:after{
      .top-line(#dedede);
    }
  }
}

.xxb-picker-wheel-pannel{
  position: absolute;
  z-index: 1000;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}

.xxb-picker-wheel-list{
  padding-top: 3.2rem;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
}
.xxb-picker-wheel-item{
  height: 1.8rem;
  line-height: 1.8rem;
  text-align: center;
  color: #333;
  font-size: .75rem;
}
</style>