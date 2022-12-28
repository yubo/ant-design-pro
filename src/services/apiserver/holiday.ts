// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** search/list holidays GET /api/v1/holidays */
export async function listHoliday(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listHolidayParams,
  options?: { [key: string]: any },
) {
  return request<API.listOutput>('/api/v1/holidays', {
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

/** create holiday acl(admin) POST /api/v1/holidays */
export async function createHoliday(body: API.createRequest, options?: { [key: string]: any }) {
  return request<API.Response200>('/api/v1/holidays', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete holidays DELETE /api/v1/holidays */
export async function deleteHolidays(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteHolidaysParams,
  options?: { [key: string]: any },
) {
  return request<API.Response200>('/api/v1/holidays', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** get holiday GET /api/v1/holidays/${param0} */
export async function getHoliday(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getHolidayParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Holiday>(`/api/v1/holidays/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** delete holiday acl(admin) DELETE /api/v1/holidays/${param0} */
export async function deleteHoliday(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteHolidayParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/holidays/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
