/**
 * https://pro.ant.design/zh-cn/docs/new-page/
 */
export default [
  {
    path: '/user', layout: false,
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: '登录', layout: false, component: './user/login' },
      { component: './404' },
    ],
  },
  {
    path: '/dashboard', name: '仪表板', icon: 'dashboard',
    routes: [
      { path: '/dashboard', redirect: '/dashboard/analysis' },
      { name: '分析页', icon: 'smile', path: '/dashboard/analysis', component: './dashboard/analysis' },
      { name: '工作台', icon: 'smile', path: '/dashboard/workplace', component: './dashboard/workplace' },
    ],
   },
 {
    path: '/good', name: '商品页', icon: 'shop', access: 'canOrgAdmin',
    routes: [
      { path: '/good', redirect: '/good/spu' },
      { path: '/good/spu', name: '产品列表', icon: 'table', component: './good/spu' },
      { path: '/good/sku', hideInMenu: true, name: '课程列表', component: './good/sku' },
    ],
  },
  {
    path: '/admin', name: '管理页', icon: 'shop', access: 'canOrgAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/org' },
      { path: '/admin/org', name: '机构列表', icon: 'table', access: 'canAdmin', component: './admin/org' },
      { path: '/admin/teacher', name: '老师列表', icon: 'table', component: './admin/teacher' },
      { path: '/admin/user', name: '用户列表', icon: 'table', access: 'canAdmin', component: './admin/user' },
      { path: '/admin/course', name: '课程列表', icon: 'table', component: './admin/course' },
    ],
  },
  {
    path: '/account', name: '个人页', icon: 'user',
    routes: [
      { path: '/account', redirect: '/account/center' },
      { path: '/account/center', name: '个人中心', icon: 'smile', component: './account/center' },
      { path: '/account/settings', name: '个人设置', icon: 'smile', component: './account/settings' },
    ],
  },
  { path: '/', redirect: '/dashboard' },
  { component: './404' },
];
