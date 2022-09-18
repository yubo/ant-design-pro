/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  return {
    canRoot: currentUser && currentUser.isRoot,
    canAdmin: currentUser && (currentUser.isAdmin || currentUser.isRoot),
    canOrgAdmin: currentUser && currentUser.isOrgAdmin,
    canTeacher: currentUser && currentUser.isTeacher,
  };
}
