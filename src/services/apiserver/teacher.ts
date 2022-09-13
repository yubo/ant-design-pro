// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** search/list teachers GET /api/v1/teachers */
export async function listTeacher(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listTeacherParams,
  options?: { [key: string]: any },
) {
  return request<API.listOutput>('/api/v1/teachers', {
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

/** create teacher POST /api/v1/teachers */
export async function createTeacher(body: API.createRequest, options?: { [key: string]: any }) {
  return request<API.Response200>('/api/v1/teachers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** get teacher GET /api/v1/teachers/${param0} */
export async function getTeacher(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTeacherParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Teacher>(`/api/v1/teachers/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** update teacher PUT /api/v1/teachers/${param0} */
export async function updateTeacher(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateTeacherParams,
  body: API.updateRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/teachers/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** delete teacher DELETE /api/v1/teachers/${param0} */
export async function deleteTeacher(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteTeacherParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/teachers/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
