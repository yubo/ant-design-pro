// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** search/list students GET /api/v1/students */
export async function listStudent(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listStudentParams,
  options?: { [key: string]: any },
) {
  return request<API.listOutput>('/api/v1/students', {
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

/** create student POST /api/v1/students */
export async function createStudent(body: API.createRequest, options?: { [key: string]: any }) {
  return request<API.Response200>('/api/v1/students', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** get student GET /api/v1/students/${param0} */
export async function getStudent(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getStudentParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Student>(`/api/v1/students/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** update student PUT /api/v1/students/${param0} */
export async function updateStudent(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateStudentParams,
  body: API.updateRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/students/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** delete student DELETE /api/v1/students/${param0} */
export async function deleteStudent(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteStudentParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/students/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
