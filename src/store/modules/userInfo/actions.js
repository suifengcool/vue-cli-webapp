import * as types from './mutation-types'

const actions = {
  // 改变userInfo
  changeUserInfo ({dispatch,commit,state},data) {
    commit(types.CHANGE_USER_INFO,data)
  }
}


export default actions
