<!--  -->
<template>
  <div class='identify_senior'>
    <header class="head">
      <h3><i class="iconfont icon-fanhui"></i>设置</h3>
    </header>

    <!-- 认证优势 -->
    <div class="advantage">
      <h3>高级认证优势</h3>
      <ul>
        <li>
          <img src="../../assets/identify/advantage3.png" alt="">
          <h4>官威认证</h4>
          <p>专属高级标识权威官方背书</p>
        </li>
        <li>
          <img src="../../assets/identify/advantage6.png" alt="">
          <h4>运营数据</h4>
          <p>丰富运营数据玩转线上经济</p>
        </li>
        <li>
          <img src="../../assets/identify/advantage5.png" alt="">
          <h4>营销引流</h4>
          <p>推广精确高效推动机构营销</p>
        </li>
        <li>
          <img src="../../assets/identify/advantage4.png" alt="">
          <h4>上门服务</h4>
          <p>上门专业包装打造明星机构</p>
        </li>
      </ul>
    </div>
    
    <!-- 认证机构 -->
    <div class="mechanism">
      <h3>已认证机构</h3>
      <ul>
        <li>
          <img src="../../assets/identify/advantage3.png" alt="">
          <h4>沐子教育</h4>
        </li>
        <li>
          <img src="../../assets/identify/advantage3.png" alt="">
          <h4>沐子教育</h4>
        </li>
        <li>
          <img src="../../assets/identify/advantage3.png" alt="">
          <h4>沐子教育</h4>
        </li>
        <li>
          <img src="../../assets/identify/advantage3.png" alt="">
          <h4>沐子教育</h4>
        </li>
      </ul>
    </div>
   
   <div class="foot">
     <div class="btn">
      立即申请
     </div>
   </div>
    
  </div>
</template>

<script>
export default {
  name: "identify_senior",
  components: {},
  created() {},
  data() {
    return {
     
    };
  },

  methods: {}
};
</script>
<style lang='scss' scoped>
.identify_senior {
  // width: 100%;
  //   height: 100%;
  //   position: fixed;
  padding-bottom: 4.22rem;
  .head {
    height: 11.38rem;
    background: url("../../assets/identify/advantage2.png"); 
    background-size: cover;
    // padding-top: 0.5rem;
    h3 {
      width: 100%;
      height: 1rem;
      font-size: 0.85rem;
      color: #fff;
      font-weight: normal; 
      line-height: 1rem;
      position: relative;
      top: 1.73rem;
      i{
        position: absolute;
        left: 1rem;
      }
    }
  }
  .advantage {
    width: 17.55rem;
    height: 10rem;
    background: #fff;
    border-radius: 0.25rem;
    margin: 0 auto;
    margin-top: 0.5rem;
    padding-top: 0.75rem;
    // padding-bottom: 1.2rem;
    h3 {
      width: 100%;
      font-size: 0.8rem;
    }
    ul {
      margin-top: 0.73rem;
      padding: 0 0.65rem;
      display: flex;
      justify-content: space-between;
      li {
        width: 3.7rem;
        h4 {
          font-size: 0.75rem;
          color: #6782f5;
          margin-bottom: 0.5rem;
        }
        p {
          font-size: 0.6rem;
          color: #999;
        }
        img {
          width: 3rem;
          margin: 0 auto;
          margin-bottom: 0.98rem;
        }
      }
    }
  }
  .mechanism {
    width: 17.55rem;
    // height: 6.75rem;
    background-color: #ffffff;
    border-radius: 0.25rem;
    margin: 0 auto;
    margin-top: 0.5rem;
    padding-top: 0.75rem;
    h3 {
      width: 100%;
      font-size: 0.8rem;
    }
    ul{
      margin-top: 0.70rem;
      padding: 0 0.65rem;
      display: flex;
      justify-content: space-between;
      li{
        h4 {
          font-size: 0.6rem;
          margin-bottom: 0.5rem;
          color: #333333;
        }
        img {
          width: 3rem;
          margin: 0 auto;
          margin-bottom: 0.3rem;
          border: solid 0.05rem #6782f5;
          border-radius: 50%;
        }
      }
    }
  }
  .foot{
    width: 100%;
    height: 3.15rem;
    background: #f2f2f2;
    position: fixed;
    bottom: 0;
    z-index: 2;
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