// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** search/list goods GET /api/v1/goods */
export async function listGood(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listGoodParams,
  options?: { [key: string]: any },
) {
  return request<API.listOutput>('/api/v1/goods', {
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

/** get good GET /api/v1/goods/${param0} */
export async function getGood(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGoodParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Good>(`/api/v1/goods/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
