// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** search/list orgs GET /api/v1/orgs */
export async function listOrg(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listOrgParams,
  options?: { [key: string]: any },
) {
  return request<API.listOutput>('/api/v1/orgs', {
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

/** create org POST /api/v1/orgs */
export async function createOrg(body: API.createRequest, options?: { [key: string]: any }) {
  return request<API.Response200>('/api/v1/orgs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete orgs DELETE /api/v1/orgs */
export async function deleteOrgs(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteOrgsParams,
  options?: { [key: string]: any },
) {
  return request<API.Response200>('/api/v1/orgs', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** get org GET /api/v1/orgs/${param0} */
export async function getOrg(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrgParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Org>(`/api/v1/orgs/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** update org PUT /api/v1/orgs/${param0} */
export async function updateOrg(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateOrgParams,
  body: API.updateRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/orgs/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** delete org DELETE /api/v1/orgs/${param0} */
export async function deleteOrg(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteOrgParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/orgs/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
