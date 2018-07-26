<template>
  <div class="xxb-pull-down">
    <div 
      class="xxb-content-box" 
      :style="{ 'height': upContentHeight+'px' }" 
      @touchmove="touchMove($event)" 
      @touchstart='touchstart($event)' 
      @touchend="touchEnd($event)"
    >
      <!-- 下拉展示区域 -->
      <div class="xxb-pull-down-drag" ref="upDrag" :class="isPull" :style="{'height':top+'px','transform': 'translate3d(0, ' + -upTopHeight + 'px, 0)'}">
        <slot name="top" v-if="!isRefreshs">
          <div class="xxb-pull-down-drag-content">
            <i class="iconfont icon-refresh xxb-icon-refresh" :style="{'transform': 'rotate(' + diff + 'deg'}"></i>
            <div class="xxb-update">
              <span class="xxb-update-span">{{pullDownText}}</span>
              <p v-if="pullDownTime" class="xxb-update-p">上次更新 {{pullDownTime}}</p>
            </div>
          </div>
        </slot>

        <div class="xxb-refresh" v-if="isRefreshs">
          <img class="xxb-refresh-img" src="../../../assets/pullDown/loading.gif" />
          <div class="xxb-update">
            <span class="xxb-update-span">刷新中...</span>
            <p v-if="pullDownTime" class="xxb-update-time">上次更新 {{pullDownTime}}</p>
          </div>
        </div>
      </div>

      <!-- 内容区域 -->
      <div ref="upContentHeight" class="xxb-pull-down-content" :class="isPull" :style="{'transform': 'translate3d(0, ' + top + 'px, 0)'}" >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'xxb-pull-down',
  data(){
    return {
      upTopHeight: null,                 // 上拉刷新高度
      upContentHeight: null,             // 内容高度
      upBottomHeight: null,              // 下拉加载高度
      startY: 0,                         // 按下的y抽距离
      startX:0,                          // 按下的x抽距离
      startScroll: 0,                    // 滚动的距离
      top: 0,                            // 下拉的距离
      isPull:false,                      // 放下拉class
      isRefreshs:false,                  // 是否刷新
      diff:null,                         // 旋转的度数
      pullDownText: '下拉可以刷新',        // 文本(下拉可以刷新，释放刷新，刷新完成）
      pullDownTime: ''                   // 上次刷新时间
    }
  },

  props:{
    // 数据刷新方法
    onRefresh: {                                                    
      type: Function,
      default: ()=>{}
    }
  },

  created(){

  },

  mounted(){
    // 上拉高度
    this.upTopHeight = this.$refs.upDrag.offsetHeight;      

    // 内容高度       
    this.upContentHeight = this.$refs.upContentHeight.offsetHeight 
  },
  methods:{
    touchstart(e){
      this.isPull = ''                          // 清除‘pull’class名
      this.startY = e.targetTouches[0].pageY;   // 按下的y抽距离
      this.startX = e.targetTouches[0].pageX;   // 按下的x抽距离
    },

    touchMove(e){
      // 移动的距离
      let diff = e.targetTouches[0].pageY - this.startY 

      if(diff > 0){
　　　　  e.preventDefault()  // 取消事件的默认动作                                      
　　　 }else{
　　　　  return 　　
　　　 }
      // 改变拉取的幅度
      this.top = Math.floor(diff*0.25)

      // 改变旋转幅度
      this.diff = Math.floor(diff*0.6)

      if (this.top >= 47) {
        this.pullDownText = '释放立即刷新'
      }else{
        this.pullDownText = '下拉可以刷新'
      }

      // 设置最大旋转度数
      if(this.diff >= 241){
        this.diff = 241
      }

      // 禁止上拉
      if(this.top <= 0 ){
        this.top = 0
      };

      // 设置下拉最大高度
      if(this.top >= 100){
        this.top = 100
      };
    },

    touchEnd(e){
      this.isPull='pull'
      // 当滑动的距离大于等于47,则刷新,否则不刷新
      if (this.top >= 47) {
        //获取系统当前时间
        var date = new Date();
        var pullDownTime = (date.getMonth()+1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();

        if(localStorage.getItem('pullDownTime')){
          this.pullDownTime = localStorage.getItem('pullDownTime')
        }

        localStorage.setItem('pullDownTime',pullDownTime);
        this.isRefreshs=true

        // 调用刷新事件传 （关闭loading方法）
        this.onRefresh(this.refreshDone)
      } else {
        this.top = 0
      }
    },
    
    refreshDone(){
      this.isRefreshs = false
      this.pullDownText = '刷新完成'
      this.top = 0
      this.diff = 0
    }
  }
}
</script>
<style lang='less'>
.xxb-pull-down{
  .xxb-content-box{
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .pull{
    transform: translate3d(0, 0, 0);
    transition: all 0.65s;
  }
  .xxb-pull-down-content{
    position: absolute;
    left: 0;
    width: 100%;
  }
  .xxb-pull-down-drag{
    position: absolute;
    width: 100%;
    left: 0;
    overflow: hidden;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .xxb-pull-down-drag-content{
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .xxb-icon-refresh{
    font-size: 1.1rem
  }
  .xxb-update{
    margin-left: .4rem;
    text-align: center;
  }
  .xxb-update-span{
    font-size: 0.75rem;
    color: #333;
  }
  .xxb-update-time{
    font-size: 0.55rem;
    color: #666;
  }
  .xxb-refresh{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .xxb-refresh-img{
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>