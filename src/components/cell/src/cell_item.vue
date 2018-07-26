<template>
  <div class="xxb-cell">
    <div class="xxb-cell-left">
      <span class="xxb-cell-left-icon">
        <slot name="icon"></slot>
      </span>
      <slot name="left"></slot>
    </div>

    <div class="xxb-cell-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'xxb-cell-item'
  }
</script>

<style lang="less">
@import "../../../styles/variables";
.xxb-cell{
  display: flex;
  justify-content: space-between;
  padding: 0 .7rem;
  box-sizing: border-box;
  height: 2rem;
  line-height: 2rem;
  background: #fff;
  position: relative;
  font-size: .7rem;
  &:after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(.5);
    background: #eee;
  }
}

.xxb-cell-left{
  color: #333;
}

.xxb-cell-left-icon{
  color: #666;
}

.xxb-cell-right{
  color: #ccc;
}
</style>