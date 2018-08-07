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

</style>
