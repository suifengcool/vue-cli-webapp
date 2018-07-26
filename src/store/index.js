import vue from "vue"
import vueX from "vuex"

import userInfo from "./modules/userInfo";

vue.use(vueX)

const store = new vueX.Store({
  strict: true,                 // 严格检测模式
  modules: {
    userInfo
  }
})

export default store
