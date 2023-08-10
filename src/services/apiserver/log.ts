// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 查看机构日志 GET /api/v1/logs/org/${param0} */
export async function listLog(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listLogParams,
  options?: { [key: string]: any },
) {
  const { 'org-id': param0, ...queryParams } = params;
  return request<API.listOutput>(`/api/v1/logs/org/${param0}`, {
    method: 'GET',
    params: {
      // pageSize has a default value: 10
      pageSize: '10',
      // current has a default value: 1
      current: '1',

      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 查看老师日志 GET /api/v1/logs/teacher/${param0} */
export async function listLog_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listLog_2Params,
  options?: { [key: string]: any },
) {
  const { 'teacher-id': param0, ...queryParams } = params;
  return request<API.listOutput>(`/api/v1/logs/teacher/${param0}`, {
    method: 'GET',
    params: {
      // pageSize has a default value: 10
      pageSize: '10',
      // current has a default value: 1
      current: '1',

      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 查看用户日志 GET /api/v1/logs/user/${param0} */
export async function listLog_3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listLog_3Params,
  options?: { [key: string]: any },
) {
  const { 'user-id': param0, ...queryParams } = params;
  return request<API.listOutput>(`/api/v1/logs/user/${param0}`, {
    method: 'GET',
    params: {
      // pageSize has a default value: 10
      pageSize: '10',
      // current has a default value: 1
      current: '1',

      ...queryParams,
    },
    ...(options || {}),
  });
}
