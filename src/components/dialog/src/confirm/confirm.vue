<template>
  <div class="xxb-confirm-mask">
    <div class="xxb-confirm">
      <h3 v-if="title" class="xxb-confirm-title">{{title}}</h3>
      <p class="xxb-confirm-content" v-html="content"></p>

      <div v-if="typeof opts == 'function'" class="xxb-confirm-footer">
        <span class="xxb-confirm-btn" @click="closeConfirm()">取消</span>
        <span class="xxb-confirm-btn" @click="closeConfirm(opts)">确定</span>
      </div>

      <div v-else class="xxb-confirm-footer">
        <span 
          class="xxb-confirm-btn"
          v-for="(item,index) in opts"
          :key="index"
          @click="closeConfirm(item.callback)"
          :style="{color: item.color ? item.color : '#353535', width: 100/opts.length + '%' }"
        >{{item.text}}</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'xxb-confirm',
  props: {
    title: String,
    content: String,
    opts: {
      type: [Array, Function],
      default: () => {}
    }
  }
}
</script>

<style lang="less">
@import "../../../../styles/mixins";
.xxb-confirm-mask{
  position: fixed;
  z-index: 2000;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.5);
}
.xxb-confirm{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: #fff;
  width: 85%;
  text-align: center;
  border-radius: 3px;
  color: #333;
  font-size: .75rem;
  animation: animate_in 0.25s;
}

@keyframes animate_in {
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

.xxb-confirm-title{
  padding: .45rem .5rem .015rem .5rem;
}

.xxb-confirm-content{
  text-align: center;
  padding: 0 .5rem;
  font-size: .7rem;
  color: #888;
  line-height: 2rem;
  word-break: break-all;
}

.xxb-confirm-footer{
  position: relative;
  display: flex;
  justify-content: space-between;
  text-align: center;
  &:after{
    .top-line(#dedede);
  }
}
.xxb-confirm-btn{
  width: 50%;
  height: 2rem;
  line-height: 2rem;
}
.xxb-confirm-btn:last-child{
  color: #1494d2;
  position: relative;
  &:after{
    .left-line(#dedede);
  }
}
</style>