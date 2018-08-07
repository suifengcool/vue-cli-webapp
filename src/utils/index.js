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

// object key序列化
function obj2key(obj, keys){  
  var n = keys.length, key = [];  
  while(n--){  
    key.push(obj[keys[n]]);  
  }  
  return key.join('|');  
}  

// 去重操作  
// eg: let arr = uniqeByKeys(arr,['shop_id']);
export const uniqeByKeys = (array,keys) => {  
  var arr = [];  
  var hash = {};  
  for (var i = 0, j = array.length; i < j; i++) {  
    var k = obj2key(array[i], keys);  
    if (!(k in hash)) {  
      hash[k] = true;  
      arr .push(array[i]);  
    }  
  }  
  return arr ;  
} 