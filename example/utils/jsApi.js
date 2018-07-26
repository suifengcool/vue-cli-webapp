;(function(undefined) {
  "use strict"

  // 对象合并
  function extend(o,n,override) {
    for(var key in n){
      if(n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)){
        o[key]=n[key];
      }
    }
    return o;
  }

  var _global;

  // 插件构造函数 - 返回数组结构
  function XXB(opt){
    this._initial(opt);
  }

  XXB.prototype = {
    constructor: this,

    _initial: function(opt) {
      if(!opt){
        console.log('暂无参数')
        return
      }
    },
    
    // 获取Webview浏览器内核，安卓 or IOS
    getBrowser:(opt)=>{
      console.log('opt:',opt)
      if(!opt || typeof opt !== 'string'){
        console.log('typeof opt:',typeof opt)
        return
      }
      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;    // android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);                // ios终端
      if(isAndroid){
        return 'isAndroid'
      }else if(isiOS){
        return 'isiOS'
      }
    },

  }
  
  // 将插件对象暴露给全局对象
  _global = (function(){ return this || (0, eval)('this'); }());
  if (typeof module !== "undefined" && module.exports) {
    module.exports = XXB;
  } else if (typeof define === "function" && define.amd) {
    define(function(){return XXB;});
  } else {
    !('XXB' in _global) && (_global.XXB = XXB);
  }
}());