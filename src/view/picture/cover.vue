<!--  -->
<template>
    <xxb-layout class="picture_cover">
      <xxb-navbar bgcolor='#6782f5' color='#fff'>
        <div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
  		  <div slot="center"><p>封面图片</p></div>
      </xxb-navbar>
      <h3 class="title">请上传封面图片</h3>
      <div class="upload">
     
          <div class="imgs" v-for="item in 5">
            <img src="../../assets/jg_cjrz_shsb.png" alt="">
          </div>
          <div class="add_picture">
            <i class="iconfont icon-camera2"></i>
            <p>请上传照片</p>
            <p>（最多十张）</p>
          </div>
       
      </div>

    <div class="btn">
      提交
    </div>
    </xxb-layout>
</template>

<script>
export default {
  name: "",
  components: {},
  created() {},
  data() {
    return {};
  },

  methods: {}
};
</script>
<style lang='scss' scoped>
.picture_cover {
  padding-top: 2.25rem;
  .icon-left {
    color: #fff;
  }
  .title {
    text-align: left;
    font-size: 0.75rem;
    color: #666;
    font-weight: normal;
    margin-top: 0.78rem;
    padding-left: 1.53rem;
  }
  .upload {
    margin-top: 0.78rem;
    padding: 0 1.63rem;
    // padding-left: 1.03rem;
    // padding-right: 1.3rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    div {
      margin-bottom: 0.5rem;
    }
    .add_picture {
      width: 30%;
      height: 5rem;
      border: dashed 0.03rem #c3c3c3;
      // margin-top: 0.93rem;
      .icon-camera2 {
        margin-top: 1.02rem;
        display: block;
        font-size: 1.1rem;
        color: #999;
      }
      p {
        padding-top: 0.43rem;
        font-size: 0.6rem;
        color: #999;
      }
    }
    .imgs {
      width: 31.1%;
      height: 5rem;
      margin-right: 0.5rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .imgs:nth-child(3n){
      margin-right: 0;
    }
  }
  .btn {
    width: 17.55rem;
    height: 2.2rem;
    background: url("../../assets/identify/advantage1.png");
    background-size: cover;
    margin: 0 auto;
    margin-top: 1.23rem;
    text-align: center;
    line-height: 2.2rem;
    font-size: 0.8rem;
    color: #fff;
    position: fixed;
    bottom: 0.73rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>