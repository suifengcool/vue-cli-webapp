<template>
  <div class="xxb-toast-mask">
    <div class="xxb-toast-content">
      <i v-if="icon" class="iconfont xxb-toast-iconfont" :class="iconfont"></i>
      <p class="xxb-toast-text" v-html="mes"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xxb-toast',
  props: {
    mes: String,
    icon: String,
    timeout: Number,
    callback: Function,
    show: Boolean
  },
  computed: {
    iconfont() {
      let iconfont = ''
      if (this.icon === 'success' || this.icon === 'error' || this.icon === 'warn') {
        iconfont = 'xxb-icon-' + this.icon
      }
      return iconfont;
    }
  }
}
</script>

<style lang="less">
.xxb-toast-mask{
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
.xxb-toast-content{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: rgba(40,40,40,.85);
  min-width: 6rem;
  max-width: 85%;
  padding: .6rem .5rem .5rem .5rem;
  text-align: center;
  border-radius: 3px;
  color: #fff;
  font-size: .7rem;
  .iconfont{
    font-size: 2rem;
  }
  p{
    margin-top: .5rem;
    width: 100%;
  }
}
.xxb-toast-fadein{
  animation: animate_in 0.25s;
}
.xxb-toast-fadeout{
  animation: animate_out 0.25s;
}

@keyframes animate_in {
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
@keyframes animate_out {
  0% {
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
</style>