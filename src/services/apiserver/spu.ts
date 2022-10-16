// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** search/list spus GET /api/v1/spus */
export async function listSpu(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listSpuParams,
  options?: { [key: string]: any },
) {
  return request<API.listOutput>('/api/v1/spus', {
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

/** create spu POST /api/v1/spus */
export async function createSpu(body: API.createRequest, options?: { [key: string]: any }) {
  return request<API.Response200>('/api/v1/spus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete spu DELETE /api/v1/spus */
export async function deleteSpus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteSpusParams,
  options?: { [key: string]: any },
) {
  return request<API.Response200>('/api/v1/spus', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** get spu GET /api/v1/spus/${param0} */
export async function getSpu(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSpuParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Spu>(`/api/v1/spus/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** update spu PUT /api/v1/spus/${param0} */
export async function updateSpu(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateSpuParams,
  body: API.updateRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/spus/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** delete spu DELETE /api/v1/spus/${param0} */
export async function deleteSpu(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteSpuParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/spus/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
