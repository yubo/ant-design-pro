// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** search/list refunds GET /api/v1/refunds */
export async function listRefund(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listRefundParams,
  options?: { [key: string]: any },
) {
  return request<API.listOutput>('/api/v1/refunds', {
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

/** create refund POST /api/v1/refunds */
export async function createRefund(body: API.createRequest, options?: { [key: string]: any }) {
  return request<API.Response200>('/api/v1/refunds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete refunds DELETE /api/v1/refunds */
export async function deleteRefunds(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteRefundsParams,
  options?: { [key: string]: any },
) {
  return request<API.Response200>('/api/v1/refunds', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** get refund GET /api/v1/refunds/${param0} */
export async function getRefund(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRefundParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Refund>(`/api/v1/refunds/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** update refund PUT /api/v1/refunds/${param0} */
export async function updateRefund(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateRefundParams,
  body: API.updateRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/refunds/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** delete refund DELETE /api/v1/refunds/${param0} */
export async function deleteRefund(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteRefundParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/refunds/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
