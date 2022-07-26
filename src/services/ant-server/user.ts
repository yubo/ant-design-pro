// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** search/list users GET /api/v1/users */
export async function listUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUserParams,
  options?: { [key: string]: any },
) {
  return request<API.ListUserOutput>('/api/v1/users', {
    method: 'GET',
    params: {
      // pageSize has a default value: 10
      pageSize: '10',
      // current has a default value: 1
      current: '1',

      // order has a default value: asc
      order: 'asc',
      ...params,
    },
    ...(options || {}),
  });
}

/** update user PUT /api/v1/users */
export async function updateUser(body: API.UpdateUserInput, options?: { [key: string]: any }) {
  return request<API.Response200>('/api/v1/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** create user POST /api/v1/users */
export async function createUser(body: API.CreateUserInput, options?: { [key: string]: any }) {
  return request<API.User>('/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** get user GET /api/v1/users/${param0} */
export async function getUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserParams,
  options?: { [key: string]: any },
) {
  const { name: param0, ...queryParams } = params;
  return request<API.User>(`/api/v1/users/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** delete user DELETE /api/v1/users/${param0} */
export async function deleteUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserParams,
  options?: { [key: string]: any },
) {
  const { name: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/users/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
