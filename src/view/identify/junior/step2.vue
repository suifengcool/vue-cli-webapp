<template>
  <xxb-layout class="identifyStop2 feedback main-content">
      <xxb-navbar class="header">
          <div slot="left" @click="$router.go(-1)">
              <i class="iconfont icon-left"></i>
          </div>
          <div slot="center">
            <p>资质信息</p>
          </div>
      </xxb-navbar>
      <div class="bg">

        <div action="" class="form" >
          <h2  class="headerTite">
            <!-- 意见反馈 -->
          </h2>
          <!-- 营业执照名称 -->
          <div class="content">
            <div class="inp_box  margin-top">
              <h5 class="label">营业执照名称：</h5>
              <input v-model.trim='formData.licenseName'  placeholder="请输入营业执照名称"/>
            </div>
          </div>
          <!-- 营业执照编号 -->
          <div class="content">
            <div class="inp_box border-bottom ">
              <h5 class="label">营业执照编号：</h5>
              <input v-model.trim='formData.licenseNum'  placeholder="请输入营业执照编号"/>
            </div>
          </div>

          <!-- 营业执照照片 -->
          <div class="content">
              <div class="inp_box img_boxHear  border-bottom margin-bottom">
                  <h5 class="label">营业执照照片</h5>
                  <!-- <textarea  v-model='details' placeholder="描述" /> -->
                  <div class="img_center">

                    <span class="img_box" v-for="(item,index) in formData.licenseImages " :key="index">
                      <img :src="item" alt="">
                      <i class="iconfont icon-delete2" @click="delImgArray(index,'licenseImages')"></i>
                    </span>
                    <span class="img_box" v-if="formData.licenseImages.length<3">
                      <img src="../../../assets/home_icon_dtj.png" alt="">
                      <input   @change="uploadFile($event, 'img ')"  type="file" accept="image/*" id="bUploadBtn" ref="input">
                      <i class="loading" v-if='isLoading'></i>
                      <!-- <i class="icon-camera1 iconfont" ></i> -->
                      <!-- <img src="../../assets/suggestion_ic_add.png" alt=""> -->
                    </span>
                  </div>

              </div>
          </div>
          <!-- 合同附件照片 -->
          <div class="content">
              <div class="inp_box img_boxHear  border-bottom ">
                  <h5 class="label">合同附件照片</h5>
                  <div class="img_center">
                    <span class="img_box" v-for="(item,index) in formData.contractImages " :key="index">
                      <img :src="item" alt="">
                      <i class="iconfont icon-delete2" @click="delImgArray(index,'contractImages')"></i>
                    </span>
                    <span class="img_box" v-if="formData.contractImages.length<3">
                      <img src="../../../assets/home_icon_dtj.png" alt="">
                      <input   @change="uploadFile($event, 'img ')"  type="file" accept="image/*" id="bUploadBtn" ref="input">
                      <i class="loading" v-if='isLoading'></i>
                    </span>
                  </div>

              </div>
          </div>
          <!-- </xxb-layout> -->
          <!-- 法人姓名 -->
          <div class="content">
            <div class="inp_box margin-bottom">
              <h5 class="label">法人姓名：</h5>
              <input v-model.trim='formData.legalPersonName'  placeholder="请输入法人姓名"/>
            </div>
          </div>



          <!-- 办学许可证编号： -->
          <div class="content">
            <div class="inp_box border-bottom">
              <h5 class="label">办学许可证编号：</h5>
              <input v-model.trim='formData.schoolNumber'  placeholder="（选填）  请输入办学许可证编号"/>
            </div>
          </div>
          <!-- 办学许可证照片 -->
          <div class="content">
              <div class="inp_box img_boxHear  border-bottom ">
                  <h5 class="label">办学许可证照片</h5>
                  <div class="img_center">
                    <span class="img_box" v-for="(item,index) in formData.schoolImages " :key="index">
                      <img :src="item" alt="">
                      <i class="iconfont icon-delete2" @click="delImgArray(index,'schoolImages')"></i>
                    </span>
                    <span class="img_box" v-if="formData.schoolImages.length<3">
                      <img src="../../../assets/home_icon_dtj.png" alt="">
                      <input   @change="uploadFile($event, 'img ')"  type="file" accept="image/*" id="bUploadBtn" ref="input">
                      <i class="loading" v-if='isLoading'></i>
                      <!-- <i class="icon-camera1 iconfont" ></i> -->
                      <!-- <img src="../../assets/suggestion_ic_add.png" alt=""> -->
                    </span>
                  </div>
                  <!-- <textarea  v-model='details' placeholder="描述" /> -->

              </div>
          </div>

          <!-- 消防许可证编号： -->
          <div class="content">
            <div class="inp_box border-bottom margin-top">
              <h5 class="label">消防许可证编号：</h5>
              <input v-model.trim='formData.fireControlNumber'  placeholder="（选填）  请输入消防许可证编号"/>
            </div>
          </div>
          <!-- 消防许可证照片 -->
          <div class="content">
              <div class="inp_box img_boxHear  border-bottom ">
                  <h5 class="label imgLabel">消防许可证照片</h5>
                  <div class="img_center">
                      <!-- <textarea  v-model='details' placeholder="描述" /> -->
                    <span class="img_box" v-for="(item,index) in formData.fireControlImages " :key="index">
                      <img :src="item" alt="">
                      <i class="iconfont icon-delete2" @click="delImgArray(index,'fireControlImages')"></i>
                    </span>
                    <span class="img_box" v-if="formData.fireControlImages.length<3">
                      <img src="../../../assets/home_icon_dtj.png" alt="">
                      <input   @change="uploadFile($event, 'img ')"  type="file" accept="image/*" id="bUploadBtn" ref="input">
                      <i class="loading" v-if='isLoading'></i>
                      <!-- <i class="icon-camera1 iconfont" ></i> -->
                      <!-- <img src="../../assets/suggestion_ic_add.png" alt=""> -->
                    </span>
                  </div>

              </div>
          </div>
          <!-- 手机号 -->
          <div class="content">
            <div class="inp_box margin-top">
              <h5 class="label">负责人电话：</h5>
              <input v-model.trim='formData.phone'  placeholder="请输入机构负责人电话" maxlength="13"/>
              <span class="getPhoneCode" @click='getPhoneCode'>{{codeLoading?'已发送验证码':'获取验证码'}}</span>
            </div>
          </div>
          <!-- 输入验证码： -->
          <div class="content">
            <div class="inp_box ">
              <h5 class="label">输入验证码：</h5>
              <input v-model.trim='formData.phoneCode'  placeholder="请输入手机验证码"/>
            </div>
          </div>

          <button @click.prevent="submitOption">提交</button>
          <!-- <h2  class="headerTite">
          </h2> -->
        </div>

      </div>
  </xxb-layout>
</template>

<script>
export default {
  data(){
      return{

        show3:　false,
        enrollType :null, //1微信 2APP

        phone:null, //姓名


        details:null, //内容
        title:'请选择您遇到的问题类型', //反馈类型
        phone:null, //手机
        img  :[], //图片
        version: null,    //手机版本号
        uniqueCode: null, //设备标识
        platform: 1,  //2安卓 1IOS
        token: null,

        // isSuccessBox:false, //报名成功的弹窗
        userId:null, //用户Id
        isLoading:false,      //图片load

        systemInfo: null,
        maxLenght: 100,

        codeLoading: false,
        formData: {
          licenseName: null,                  // 营业执照名称：
          licenseNum: null,                   // 营业执照号
          licenseImages: [
            {},
            {},
            {},
            {},
          ],                  // 营业执照图片
          contractImages: [],                 // 合同附件照片
          legalPersonName: null,              // 法人姓名
          schoolNumber: null,                 // 办学许可号
          schoolImages: [],                   // 办学许证照片
          fireControlNumber: null,            // 消防号
          fireControlImages: [],              // 消防执照
          phone: null,                        // 负责人姓名
          phoneCode: null,                    // 验证码
        }


      }
    },
    created(){
        xxb.config.title('资质信息')
    },


    methods:{
        // 获取验证码
        getPhoneCode(){
          if (this.codeLoading) {
            this.$dialog.toast({mes:'已发送验证码，请耐心等候'})
            return
          }
          this.codeLoading = true
          console.log('getPhoneCode');
          setTimeout(()=>{
            this.codeLoading = false
          },30000)

        },
        delImgArray(index,key){
          // this.img .splice(index,1)
          this.formData[key].splice(index,1)
        },
        uploadFile(event){
        //   console.log(1,event.target.files);
        //   let file = event.target.files[0]
        //   let formData = new FormData()
        //   formData.append("file", event.target.files[0])
        //   console.log(1,event.target.files);
        //   if(!file){
        //     this.$dialog.toast({mes:'请选择图片'})
        //     return
        //   }
        //   this.isLoading = true
        //   vm.fetch.get(`/system/qiniu`).then(token => {
        //     formData.append('key', moment().format('YYYYMMDDHHmmssSSS')+file.name  + file.name.substring(file.name.lastIndexOf('.'), file.name.length))
        //     formData.append('token', token.uptoken);
        //     const UPLOAD_URL = location.protocol === 'https:' ? 'https://up.qbox.me' : 'http://up-z0.qiniu.com'
        //     vm.fetch.post(UPLOAD_URL+`?${(new Date()).getTime()}`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
        //     .then(data=>{
        //       if(data){
        //         this.formData.images   = [...this.formData.images ,token.path+"/"+data.key]
        //         // event.target.files = []
        //         this.$refs.input.type = 'text'

        //         console.log(this.img );
        //         event
        //         setTimeout(()=>{
        //             this.isLoading = false
        //             this.$refs.input.type = 'file'
        //         },0)
        //       }
        //     })
        //     .catch(error=>{

        //     })
        // })

      },
      submitOption(){ //提交的按钮

        if(!this.formData.licenseName){
           this.$dialog.toast({mes:'营业执照名称不能为空!'})
           return
        }
        if(this.formData.licenseName.length<2 || this.formData.licenseName.length>50){
           this.$dialog.toast({mes:'请输入正确的营业执照名称'})
           return
        }
        if(!this.formData.licenseNum){
           this.$dialog.toast({mes:'营业执照号不能为空!'})
           return
        }
        if(!/^[A-Z0-9]+$/.test(this.formData.licenseNum)){
           this.$dialog.toast({mes:'请输入正确的营业执照号!'})
           return
        }
        if(!this.licenseImages.length<=0){
          this.$dialog.toast({mes:'营业执照照片不能为空!'})
          return
        }
        if(!this.contractImages.length<=0){
          this.$dialog.toast({mes:'合同附件照片不能为空!'})
          return
        }
        if(!this.legalPersonName){
          this.$dialog.toast({mes:'法人姓名不能为空!'})
          return
        }
        if(!this.formData.legalPersonName.length<6){
          this.$dialog.toast({mes:'请输入正确的姓名格式'})
          return
        }
        if(!/^[\u4E00-\u9FA5A-Za-z\.]+$/.test(this.formData.legalPersonName)){
          this.$dialog.toast({mes:'请输入正确的姓名格式'})
          return
        }
        // if(!this.schoolNumber){
        //   this.$dialog.toast({mes:'办学许可证编号不能为空!'})
        //   return
        // }
        // if(!this.schoolNumber.length<30){
        //   this.$dialog.toast({mes:'请输入正确的办学许可证编号'})
        //   return
        // }
        if(!this.schoolImages.length<=0){
          this.$dialog.toast({mes:'办学许可证照片不能为空!'})
          return
        }
        // if(!this.fireControlNumber){
        //   this.$dialog.toast({mes:'消防许可证编号不能为空!'})
        //   return
        // }
        // if(!this.fireControlNumber.length<30){
        //   this.$dialog.toast({mes:'请输入正确的消防许可证编号'})
        //   return
        // }
        if(!this.fireControlImages.length<=0){
          this.$dialog.toast({mes:'消防许可证照片不能为空!'})
          return
        }
        if(!this.phone){
          this.$dialog.toast({mes:'负责人电话不能为空!'})
          return
        }
        if(!/^1[0-9]{10}$/.test(this.phone)){
          this.$dialog.toast({mes:'请输入正确手机格式!'})
          return
        }
        if(!this.phoneCode){
          this.$dialog.toast({mes:'手机验证码不能为空!'})
          return
        }
        if(this.phoneCode<4 || this.phoneCode>6){
          this.$dialog.toast({mes:'请输入正确的手机验证码'})
          return
        }


//   fireControlNumber: null,
        //   fireControlImages: [],
        //   phone: null,
        //   phoneCode: null,


        var obj = {}
        if(this.enrollType == 2){//如果是APP
            obj.userId = this.userId
        }

        // vm.fetch.post(`/user/feedBack?ACCESS_TOKEN=${this.token}`,{
        //   phone:this.phone,
        //   details:this.details,
        //   title:this.title=='请选择您遇到的问题类型'?null:this.title,
        //   img :this.img.join(",") ,
        //   deviceType: this.systemInfo,
        //   version: this.version,
        //   uniqueCode:　this.uniqueCode,
        //   // token:　this.token,
        //   })
        //   .then(data=>{
        //     if(data.code == 200 && data.data){
        //       this.$dialog.toast({mes:'已反馈成功，谢谢你的反馈！'})
        //       setTimeout(()=>{
        //         vm.config.closePageApp()
        //         // this.isSuccessBox = true
        //         // closePage
        //       },1500)
        //     }else{
        //       this.$dialog.toast({mes:data.msg})
        //     }
        // })
        // .catch(error=>{
        //   this.$dialog.toast({mes:error.msg})
        // })
      }
    },
    watch: {
      details(val,odl){
        this.maxLenght = 100 - val.length
      }
    }
}
</script>



<style scoped lang="sass">
  .identifyStop2
    width: 100%
    height: 100%
    position: relative
    overflow: hidden
    overflow-y: scroll
    display: flex
    flex-direction: column
    .popupDig
      padding:　2rem 1rem
    .success_box
      width: 100%
      height: 100%
      background-color: rgba(0, 0, 0, 0.5)
      position: absolute
      top: 0
      left: 0
      .success_content
        position: absolute
        animation: amplification 1s linear normal forwards
        top: 0
        bottom: 0
        left: 0
        right: 0
        margin: auto
        @keyframes amplification
          0%
            transform: scale3d(.3,.3,.3)
          100%
        z-index: 100
        width: 14rem
        height: 11rem
        background-color: #ffffff
        background-size: 100% 100%
        text-align: center
        h3
          line-height: 4.2rem
          color: #fff
          font-size: 1rem
        p
          line-height: 1rem
          font-size: 1rem
        p:nth-of-type(1)
          padding-top: 1.2rem
          color: #999
        p:nth-of-type(2)
          color: #4db8fc
        button
          width: 7rem
          height: 2rem
          background-image: linear-gradient(180deg, #0ecfff 0%, #2462ff 100%)
          border-radius: 1rem
          color: #ffffff
          line-height: 2rem
          border: 0
          margin-top: 0.8rem
          font-size: 1rem
    .bg
      width: 100%
      background-size: 100% 100%
      position: relative
      overflow: hidden
      overflow-y: scroll
      display: flex
      background: #f2f2f2
      flex: 1

      .headerTite
        color: #fff
        font-size: 1.4rem
        width: 13rem
        display: block
        position: relative
        margin: auto
        padding-bottom: 1rem
        padding-top: 1rem
      .form
        width: 100%
        position: relative
        margin: 0 auto
        .inp_box
          display: flex
        .content
          position: relative
          p
            position: absolute
            color: #ff0000
            bottom: -0.8rem
            text-indent: 1.2rem
            opacity: 0.8
        .img_box
          position: relative
          width: 3.5rem
          height: 3.5rem
          border-radius: 50%
          background-color: #fff
          display: flex
          align-items: center
          justify-content: center


          .loading
            width: 100%
            height: 100%
            position: absolute
            background-size: 30% 30%
            top: 0
            bottom: 0
            display: block
            z-index: 100

          .iconfont
            position: absolute
            right: -0.3rem
            top: -0.5rem
            color: #908888
          .icon-delete2
            color: #fff
            background: rgba(0,0,0,0.2)
            font-size: 0.5rem
            border-radius: 50%
            width: 0.9rem
            height: 0.9rem
            text-align: center
            line-height: 0.9rem
          .icon-camera1
            left: 1.2rem
            top: 1.2rem
            color: #aaa
            font-weight: 700
            font-size: 1rem
          #bUploadBtn
            width: 100%
            height: 100%
            position: absolute
            top: 0
            bottom: 0
            opacity: 0
            border-radius: 50%
            z-index: 1000
          img
            width: 2rem
            height: 2rem

        .inp_box
          padding: 0 0.9rem
          height: auto
          border: solid 0rem #9cd6fe
          margin: 0 auto
          position: relative
          background-color: #fff
          display: flex
          align-items: center
          .imgLabel
            width: 100%
          .getPhoneCode
            position: absolute
            right: 1rem
            height: 100%
            display: flex
            align-items: center
            color: #6782f5
            font-size: 0.7rem
          .rightIcon
            position: absolute
            right: 0.8rem
            top: 0.9rem
            color: #999
            z-index: 999
          .tipLength
            position: absolute
            bottom: 0.4rem
            right: 1.7rem
            color: #999
            font-size: 0.6rem
          h5
            color: #333;
            padding: 0.5rem 0 0.6rem
            height: 1.0rem
            line-height: 1.0rem
            font-size: 0.7rem
            font-weight: 400
            font-family: PingFang-SC-Medium
            display: flex
            align-items: center
          textarea
            width: 100%
            height: 6.5rem
            background-color: #ffffff
            color: #999
            border: 0.06rem solid #fff
            padding-top: 0.5rem
            font-size: 0.7rem

          .select
            display: block
            width: 100%
            height: 2rem
            padding: 0.5rem
            border-radius: 0.2rem
            background-color: #ffffff
            color: #999
            border: 0.06rem solid #fff
            border-radius: 0.2rem
            font-size: 0.7rem
            position:  absolute
            right: 0
            top: 0.3rem
            width: 13rem
            padding-right: 2rem
            text-align: right

          input
            padding: 0.5rem
            height: 1rem
            border: 0
            color: #999
            font-size: 0.7rem
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            border-radius: 0.1rem
            background-color: #ffffff
            border: 0.00rem solid
            border-radius: 0.2rem
            position: absolute
            width: 12rem
            right: 0
          .icon_name
            background-size: 100% 100%
          .icon_phone
            background-size: 100% 100%
          .icon_details
            background-size: 100% 100%
          .icon_title
            background-size: 100% 100%
          .img_box
            width: 6rem
            height: 5rem
            margin-bottom: 0.7rem
            border-radius: 0
            position: relative
            border-radius: 0.2rem
            border: solid 0.03rem #eeeeee
        .margin-top
          margin-top: 0.5rem
        .margin-bottom
          margin-bottom: 0.5rem
        .border-bottom
          border-bottom: 0.01rem #eee solid
        .img_boxHear
          display: block
          .label
            text-align: left
        button
          width: 17rem
          height: 2rem
          display: block
          position: relative
          margin: 0 auto
          margin-top: 1rem
          border-radius: 1rem
          border: 0
          color: #fff
          line-height: 2rem
          font-size: 0.75rem
          background-color: #6782f5
        .img_boxHear
          height: auto
          .img_center
            display: flex
            flex-wrap: wrap
            justify-content: space-between
            padding: 0 1rem
            box-sizing: border-box




</style>
<style lang="sass">
.vm-popup.popup-show
  height: 30% !important
.popup-bottom
  height: 30% !important
.identifyStop2
  .xxb-navbar
    background-color: rgb(103,130,245) !important
    color: #fff
    p
      color: #fff
</style>



