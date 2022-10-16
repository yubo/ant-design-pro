// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/**  acl(read) GET /api/v1/notices */
export async function listNotice(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listNoticeParams,
  options?: { [key: string]: any },
) {
  return request<API.listOutput>('/api/v1/notices', {
    method: 'GET',
    params: {
      // pageSize has a default value: 10
      pageSize: '10',
      // current has a default value: 1
      current: '1',

      ...params,
    },
    ...(options || {}),
  });
}

/** delete notice DELETE /api/v1/notices */
export async function deleteNotice(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteNoticeParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>('/api/v1/notices', {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
