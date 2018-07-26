<template>
  <xxb-layout class="demo-backTop">
  	<xxb-navbar class="top">
  		<div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
  		<div slot="center"><p>backTop</p></div>
  	</xxb-navbar>
		<div class='content'>
			<ul>
				<li v-for="i in 30" :key='i'>看扶摇+{{i}}</li>
			</ul>
		</div>
		<xxb-backTop >
			<!-- <div><i class='iconfont icon-top'></i></div> -->
		</xxb-backTop>
	</xxb-layout>
</template>
<script>
export default {
  name: 'demo-backTop',
  data () {
    return {
      
    } 
	},
	 methods: {
	
	 }
}
</script>

<style scoped lang="less">
  .demo-backTop{
		padding: 2.25rem .65rem 0 .65rem;
		.content{
			ul{
				margin: 0;
				padding: 0;
				list-style: none;
				li{
					height: 50px;
					background: #ddd;
					margin-bottom: 5px;
				}
			}
			p{
				height: 2rem;
			}
		}
  }
</style>