/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  return {
    // 系统管理员/ 未使用
    canRoot: currentUser && currentUser.isRoot,
    // 管理员
    canAdmin: currentUser && currentUser.isAdmin,
    // 机构管理员
    canOrgAdmin: currentUser && (currentUser.isOrgAdmin || currentUser.isAdmin),
    // 老师
    canTeacher: currentUser && currentUser.isTeacher,
  };
}
