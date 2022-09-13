/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  return {
    canSystemAdmin: currentUser && currentUser.groups.includes('system:masters'),
    canTeacher: currentUser && currentUser.groups.includes('teacher'),
    canAdmin: currentUser && currentUser.groups.includes('admin'),
  };
}
