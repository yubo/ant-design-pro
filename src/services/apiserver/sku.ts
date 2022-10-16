// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** search/list skus GET /api/v1/skus */
export async function listSku(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listSkuParams,
  options?: { [key: string]: any },
) {
  return request<API.listOutput>('/api/v1/skus', {
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

/** create sku POST /api/v1/skus */
export async function createSku(body: API.createRequest, options?: { [key: string]: any }) {
  return request<API.Response200>('/api/v1/skus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete skus DELETE /api/v1/skus */
export async function deleteSkus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteSkusParams,
  options?: { [key: string]: any },
) {
  return request<API.Response200>('/api/v1/skus', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** get sku GET /api/v1/skus/${param0} */
export async function getSku(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSkuParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Sku>(`/api/v1/skus/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** update sku PUT /api/v1/skus/${param0} */
export async function updateSku(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateSkuParams,
  body: API.updateRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/skus/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** delete sku DELETE /api/v1/skus/${param0} */
export async function deleteSku(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteSkuParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/skus/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
