/**
 * https://pro.ant.design/zh-cn/docs/new-page/
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: '登录', layout: false, component: './user/login' },
      { component: './404' },
    ],
  },
  {
    path: '/account',
    name: '个人页',
    icon: 'user',
    routes: [
      { path: '/account', redirect: '/account/center' },
      { path: '/account/center', name: '个人中心', icon: 'smile', component: './account/center' },
      {
        path: '/account/settings',
        name: '个人设置',
        icon: 'smile',
        component: './account/settings',
      },
    ],
  },
  { path: '/sku/list', hideInMenu: true, name: '课程列表', component: './sku/list' },
  { path: '/spu/list', name: '产品列表', icon: 'table', component: './spu/list' },
  {
    path: '/org/list',
    name: '机构列表',
    icon: 'table',
    access: 'canAdmin',
    component: './org/list',
  },
  { path: '/user-list', name: '用户列表', icon: 'table', component: './user-list' },
  { path: '/teacher/list', name: '老师列表', icon: 'table', component: './teacher/list' },
  { path: '/course/list', name: '课程列表', icon: 'table', component: './course/list' },
  { path: '/', redirect: '/spu/list' },
  { component: './404' },
];
