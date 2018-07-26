<template>
  <div class="xxb-backTop" id='backTop'>	
			<div class="xxb-goTop" v-show="goTopShow"  @click='goTop'>
				<!-- 默認插槽 -->
				<slot><i class='iconfont icon-backtop'></i></slot>
				<slot name='backTop'></slot>
			</div>
  </div>
</template>
<script>
export default {
  name: 'xxb-backTop',
   props: {
	},
  data () {
    return {
			goTopShow:false,                    // 返回圖標的顯示與隱藏
			scrollTop:null                      //文檔滾動的距離
    }
  },
	mounted() {
      window.addEventListener('scroll', this.handleScroll);
      },
  methods: {
		//滚动事件
		handleScroll () {
			this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			if(this.scrollTop>100){
				this.goTopShow=true
			}else{
				this.goTopShow=false
			}
		},
		//點擊圖標返回頂部
		goTop(){
			let timer = setInterval(()=>{
				this.scrollTop-=100
				document.body.scrollTop = document.documentElement.scrollTop =  this.scrollTop;
				if(this.scrollTop<=0){
						clearInterval(timer)
				}
			},50)
		} 
  }
}
</script>

<style lang="less">
  .xxb-backTop{
		.xxb-goTop{
			width:2rem;
			height: 2rem;
			line-height:2rem;
			// background: rgba(0,0,0,.5);
			position:fixed;
			bottom: 1rem;
			right:1rem;
			text-align:center;
			border-radius:50%;
			i{
				font-size:2.2rem;
				color:#1494d2;
			}
		}
  }
</style>