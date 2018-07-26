/* 分块定义异步组件 使用 AMD 风格的 require
 * const Home = resolve => require(['./pages/Home.vue'], resolve)
 *
 * 定义路由(相对 ./pages)
 *
 * const routes = [
 *     { path: '/', component: resolve => require(['./pages/Home.vue'], resolve) }
 * ]
 */

let config = [
  '/home/index',                                    // 首页
  '/identify/index',                                // 认证类型选择
  '/identify/junior/step1',                         // 初级认证--负责人信息
  '/identify/junior/step2',                         // 初级认证--资质信息
  '/identify/status',                               // 初级认证--审核状态页
  '/identify/senior',                               // 高级认证

  // '/message/base',                                  // 机构管理--基础信息
  // '/message/attach',                                // 机构管理--附加信息

  '/introduce/index',                               // 机构介绍
  '/picture/cover',                                 // 机构相册--封面图片
  // '/picture/environment;',                          // 机构相册--环境图片
  // '/picture/honor',                                 // 机构相册--机构荣誉
  // '/picture/student',                               // 机构相册--学员风采
]


// 登录前相关路由
// let config = [
//   '/home/index',                                    // 首页
//   '/senior/index',                                  // 高级认证
//   '/qualification/information/index',
//   '/identify/index',                          // 认证首页
//   '/identify/advanced/index',                 // 高级认证
//   '/identify/primary/index',                  // 初级认证
//   '/identify/auditState/index',               // 认证状态
//   '/introduce/index'                                // 机构介绍
// ]

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
