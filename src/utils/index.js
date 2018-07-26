// cookie 操作封装
export const cookie = {
  set(name, value, days) {
    const d = new Date()
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days)
    window.document.cookie = `${name}=${value};path=/;expires=${d.toGMTString()}`
  },
  get(name) {
    const v = window.document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`)
    return v ? v[2] : null
  },
  delete(name) {
    this.set(name, '', -1)
  }
}

// localStorage 操作封装
export const storage = {
  get(key, def = '') {
    return JSON.parse(localStorage.getItem(key) || def)
  },
  set(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj))
  },
  delete(key) {
    localStorage.removeItem(key)
  },
  clear() {
    localStorage.clear()
  }
}

// 数组去重
export const editAwrray = (arr) => {
  let newArr = [], obj = {}
  arr.forEach((item, index) =>{
    if(obj[item]){
      return
    }else{
      obj[item] = 1
      newArr.push(item)
    }
  })
  arr = newArr
  return arr
}