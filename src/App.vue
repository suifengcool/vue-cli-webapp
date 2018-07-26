<template>
  <div id="app">

    <!-- 路由 页面切换 -->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
// 导入css
@import 'styles/style'

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .xxb-flexview
     height: 100vh
     .xxb-scrollview
        height: 100vh


.fade-enter-active, .fade-leave-active
  transition: opacity .5s;


.fade-enter, .fade-leave-active
  opacity: 0;


</style>
