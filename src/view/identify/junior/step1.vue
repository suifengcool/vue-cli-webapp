<template>
   <xxb-layout class="junior-step1">
      <xxb-navbar bgcolor='#6782f5' color='#fff'>
          <div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
  		    <div slot="center"><p>负责人信息</p></div>
      </xxb-navbar>
      <div class="primary-content">
          <div class="form-content">
              <div class="form-message border-bottom">
                  <div class="message-centre cross-center">
                      <h5>负责人姓名：</h5>
                      <input class="form-name" v-model.trim="form.name" @blur="changeName" placeholder="请输入机构负责人姓名"/>
                  </div>
              </div>
              <div class="form-message">
                  <div class="message-centre cross-center">
                      <h5>负责人身份证号码：</h5>
                      <input class="form-number" v-model.trim="form.identityCard" @blur="changeNumber" placeholder="请输入机构负责人身份证号码"/>
                  </div>
              </div>
          </div>
          <div class="form-identity">
              <div class="identity-front">
                <h5>负责人身份证正面照</h5>
                <div class="identity-front-img main-center">
                    <div class="border-circle center-center">
                      <img :src="form.identityCardImg || require('../../../assets/primary/icon_facade_of_id_card.png')"/>
                        <p>
                            <img src="../../../assets/primary/home_btn_tj.png"/>
                            <input type="file"/>
                        </p>
                    </div>
                </div>
              </div>
              <div class="identity-front">
                <h5>负责人身份证反面照</h5>
                <div class="identity-front-img main-center">
                    <div class="border-circle center-center">
                        <img :src="form.identityCardReverse || require('../../../assets/primary/icon_identitycard.png')"/>
                        <p>
                            <img src="../../../assets/primary/home_btn_tj.png"/>
                            <input type="file"/>
                        </p>
                    </div>
                </div>
              </div>
              <div class="identity-front">
                <h5 class="claim">拍摄要求</h5>
                <ul class="require">
                    <li>
                        <p class="border-circle center-center"><img src="../../../assets/primary/icon_standard.png" class="img"/></p>
                        <p class="require-icon center-center"><img src="../../../assets/primary/home_icon_dg.png"/> 标准</p>
                    </li>
                    <li>
                        <p class="border-circle center-center"><img src="../../../assets/primary/icon_edge_angle_deletion.png" class="img"/></p>
                        <p class="require-icon center-center"><img src="../../../assets/primary/home_icon_cc.png"/> 边角缺失</p>
                    </li>
                    <li>
                        <p class="border-circle center-center"><img src="../../../assets/primary/icon_blurred_photo.png" class="img"/></p>
                        <p class="require-icon center-center"><img src="../../../assets/primary/home_icon_cc.png"/> 照片模糊</p>
                    </li>
                    <li>
                        <p class="border-circle center-center"><img src="../../../assets/primary/icon_overreflection.png" class="img"/></p>
                        <p class="require-icon center-center"><img src="../../../assets/primary/home_icon_cc.png"/> 反光过度</p>
                    </li>
                </ul>
              </div>
              <button class="next-step" @click="nextStep">下一步</button>
          </div>
      </div>
   </xxb-layout>
</template>

<script>
export default {
  name:'junior-step1',
  data(){
    return{
      form: {
        name: '',                           // 负责人姓名
        identityCard:'',                    // 负责人身份证号
        identityCardImg:'',                 // 身份证正面照
        identityCardReverse:''              // 身份证反面照
      }
    }
  },
  created () {
    xxb.config.title('负责人信息')
  },
  methods:{
    // name失去焦点
    changeName(){
        if(this.form.name){
            if(!/^[\u4E00-\u9FA5A-Za-z\.]+$/.test(this.form.name)){
                this.form.name = ''
                this.$dialog.toast({mes:'请输入正确的姓名格式!'})
                return
            }
        }else{
            this.$dialog.toast({mes:'请输入姓名!'})
            return
        }
    },

    // 更改身份证
    changeNumber(){
        if(this.form.identityCard){
            let format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/
            if(!format.test(this.form.identityCard)){
                this.form.identityCard = ''
                this.$dialog.toast({mes:'请输入正确身份号!'})
                return
            }
        }else{
            this.$dialog.toast({mes:'请输入身份证号!'})
            return
        }
    },
    // 下一步
    nextStep(){
        if(!this.form.identityCardImg){
            this.$dialog.toast({mes:'请上传身份证正面图!'})
            return
        }
        if(!this.form.identityCardReverse){
            this.$dialog.toast({mes:'请上传身份证反面图!'})
            return
        }

    }
  }
}
</script>

<style scoped lang="sass">
    .junior-step1
        .icon-left
          color: #fff;

        .primary-content
            background: #f8f9fb;
            height: calc(100vh - 2.25rem)
            overflow-y: auto;
            margin-top: 2.25rem;
            .form-content
                margin-top: 0.325rem;
                margin-bottom: 0.4rem;
                background: #ffffff;
                .form-message
                    height: 2.25rem;
                    .message-centre
                        height: 100%
                        padding: 0 0.6rem;
                        h5
                            font-size: 0.75rem;
                            color: #333333;
                            font-weight: 400;
                        input
                            height: 100%;
                            border: none;
                            align-items: center;
                            font-size: 0.65rem;
                            color: #999999;
                            text-indent: 0.2rem;
                        .form-name
                            width: 74%;
                        .form-number
                            width: 61%;

        .form-identity
            padding: 0 0.6rem;
            background: #fff;
            .identity-front
                padding-top: 0.8rem;
                h5
                    font-size: 0.75rem;
                    font-weight: 400;
                    line-height: 0.75rem;
                    color: #333;
                    margin-bottom: 0.525rem;
                    text-align: left;
                .claim
                    color: #666;
                .identity-front-img
                    position: relative;
                    .border-circle
                        width: 10rem;
                        height: 6.25rem;
                        border-radius: .4rem;
                        position: relative;
                        img
                            width: 100%;
                            height: 100%;
                        p
                            width: 2.5rem;
                            height: 2.5rem;
                            position: absolute;
                            img
                                width: 100%;
                                height: 100%
                            input
                                opacity: 0;
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;

            .require
                display: flex;
                justify-content: space-around;
                width: 100%;
                li
                    width: 22.86%;
                    margin-right: 2.85%;
                    .border-circle
                        height: 3rem;
                        padding-top: 0;
                        .img
                            width: 90%;
                            height: 80%;
                            margin: 0;
                    .require-icon
                        font-size: 0.55rem;
                        color: #333;
                        padding-top: 0.325rem;
                        img
                            width: 0.525rem;
                            height: 0.3rem;
                            margin-right: 0.25rem;
                li:nth-child(4)
                    margin-right: 0;

            .next-step
                background: #6782f5;
                height: 2.2rem;
                width: 100%;
                line-height: 2.2rem;
                text-align: center;
                color: #fffefe;
                font-size: 0.7rem;
                border: none;
                border-radius: 1.1rem;
                margin-bottom: 0.5rem;
                margin-top: 0.75rem;
</style>
<style lang="sass">
.junior-step1
    .xxb-scrollview:after
        height: 0
</style>
