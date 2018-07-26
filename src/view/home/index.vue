<template>
  <div id="home">
    首页
    <!-- <networkWeak></networkWeak> -->
    <dummyStatus></dummyStatus>
  </div>
</template>

<script>
import networkWeak from '../../components/networkWeak'
import dummyStatus from '../../components/dummyStatus'
export default {
  name: 'home',
  components: {
    networkWeak,
    dummyStatus
  },
  data () {
    return {

    }
  },

  created () {
    xxb.config.title('首页')
  },

  methods: {

  }
}
</script>

<style scoped lang="sass">
#home
  font-size: 1.5rem
</style>
<style lang="sass">

</style>
