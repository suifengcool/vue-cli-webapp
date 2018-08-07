/* 
 * 分块定义异步组件 使用 AMD 风格的 require
 * const Home = resolve => require(['./view/Home.vue'], resolve)
 * 定义路由(相对 ./view)
 * const routes = [{
 *   path: '/', component: resolve => require(['./view/Home.vue'], resolve) 
 * }]
 */

let config = [
  '/home/index',                                    // 首页
]

// 定义路由
const relativePath = '';
const routes = [
  ...parseRoutes(config),
  {
    path: '*',
    component: resolve => require(['../view/404.vue'], resolve)
  }
]

// 工厂函数：解析路由配置，返回routes数组
function parseRoutes(config) {
  return [
    ...config.map((value, index) => {
      let array = value.split(',')
      const fileName = array[0].replace(/\/(\:|\?)[A-z]+$/g, '')

      return {
        path: relativePath + array[0].replace(/(\/index|home\/index)$/g, ''),
        component: resolve => require([`../view${fileName}.vue`], resolve)
      }
    })
  ]
}

export default routes