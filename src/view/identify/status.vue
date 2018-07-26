<template>
  <xxb-layout id="identifyState">
    <div class="identifyState-box">
      <div class="img" :class="isStatusBg[status]"> 
        <xxb-navbar>
            <div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
            <div slot="center"><p>设置</p></div>
        </xxb-navbar>
      </div>
      <h3>{{tipList[status]}}</h3> 
      <p class="is-p">{{detailList[status]}}</p> 
      <p class="is-p">若有疑问请致电客服<span>400-8888-8888</span>。</p>
      <button class="btn border-circle">{{btnList[status]}}</button> 
    </div>
  </xxb-layout>
</template>
<script>
export default {
  name: 'auditState',
  data(){
    return{
      status:0,                                                                                                                          //状态 0成功  1失败  2审核中             
      isStatusBg:["success","faile","wait"],                                                                                             //背景图片样式   
      tipList:["恭喜您,您的审核已成功!","抱歉,您的审核未通过!","提交成功,请等待管理员审核!"],                                                  // 提示
      detailList:["即刻起您可享有初级认证专享权益,","对不起,您的营业执照过于模糊，请重新上传!","您的申请已提交,我们将在1-3个工作日内完成审核,"],   // 状态说明
      btnList:["完成","重新审核","刷新"]                                                                                                   //按钮文字     
    }
  },
  created(){
    xxb.config.title('初级资质审核状态') 
  }

}
</script>
<style lang="sass" scoped>
#identifyState
  height: 100vh
  width: 100% 
  background-color: #fff 
  .identifyState-box 
    width: 100%
    text-align: center
    .success
      background:url("../../assets/jg_cjrz_shcg.png") 0 0 no-repeat
    .wait
      background:url("../../assets/jg_cjrz_shz.png") 0 0 no-repeat 
    .faile
      background:url("../../assets/jg_cjrz_shsb.png") 0 0 no-repeat 
    .img
      display: block
      width: 100% 
      height: 16rem
      background-size: cover
      .xxb-navbar 
        background-color: rgba(0,0,0,0) !important
        color: #fff !important
        .xxb-navbar-center
          p
            color: #fff !important
            font-size : 0.8rem !important 
      .xxb-navbar:after
        border-color: #fff !important   

    h3
      color: #333333
      font-size: .8rem
      font-weight: 600 
      margin-bottom: 1rem
    .is-p
      color: #999999
      line-height: 1.2rem
      font-size: .7rem
      span
        color: #6782f5
    button
      width: 10rem;
      height: 2rem;
      border-radius: .2rem;
      border: solid 0.03rem #6782f5;
      color: #6782f5;
      font-size: .8rem
      margin-top: 3rem
</style>
