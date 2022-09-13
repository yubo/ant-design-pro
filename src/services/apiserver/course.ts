// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** search/list courses GET /api/v1/courses */
export async function listCourse(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listCourseParams,
  options?: { [key: string]: any },
) {
  return request<API.listCourseOutput>('/api/v1/courses', {
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

/** get course GET /api/v1/courses/${param0} */
export async function getCourse(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCourseParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Course>(`/api/v1/courses/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** update course PUT /api/v1/courses/${param0} */
export async function updateCourse(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateCourseParams,
  body: API.updateInput,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/courses/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** delete course DELETE /api/v1/courses/${param0} */
export async function deleteCourse(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteCourseParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/courses/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
