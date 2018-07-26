<template>
    <xxb-layout class="introduce">
        <xxb-navbar bgcolor='#6782f5' color='#fff'>
            <div slot="left" @click="$router.go(-1)"><i class="iconfont icon-left"></i></div>
            <div slot="center"><p>机构介绍</p></div>
        </xxb-navbar>
        <div class="organization-content">
            <div class="intro">
                <h5>机构简介</h5>
                <textarea v-model.trim="intro" placeholder="请输入机构简介(15-300字以内)"></textarea>
                <span>{{intro.length}}/300</span>
            </div>
            <div class="button">
                <button class="next-step" @click="submit">提交</button>
            </div>
        </div>
    </xxb-layout>
</template>
<script>
export default {
    name:'introduce',
    data(){
      return {
        intro: ''                          // 机构简介
      }
    },
    created () {
      xxb.config.title('机构介绍')
    },
    methods:{
      // 提交
      submit(){
          if(this.intro.length<15){
              this.$dialog.toast({mes:'机构简介最少15字符!'})
              return
          }
          if(this.intro.length>300){
              this.$dialog.toast({mes:'机构简介最多300字符!'})
              return
          }
      }
    },
    watch:{
      intro(val,old){
        if(val.length>300){
          this.intro=this.intro.substring(0,300)
        }
      }
    }
}
</script>
<style scoped lang="sass">
    .introduce
        .icon-left
            color: #fff;
        .organization-content
            background: #f4f5f7;
            padding-top: 2.25rem;
            .intro
                background: #fff;
                margin-top: 0.4rem;
                padding: 0 0.6rem;
                position: relative
                h5
                    font-size: 0.75rem;
                    color: #666;
                    text-align: left;
                    padding-top: 0.75rem;
                    padding-bottom: 0.725rem;
                textarea
                    height: 6.7rem;
                    width: 100%;
                    border: none;
                    text-indent: 0.45rem;
                    font-size: 0.65rem;
                    color: #999;
                    margin-bottom: 0.725rem
                span
                    position: absolute;
                    right: 0.6rem;
                    bottom: 0.2rem;
            .button
                padding: 0 0.6rem;
                position: fixed;
                width: calc(100% - 1.2rem);
                bottom: 0;
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

</style>

