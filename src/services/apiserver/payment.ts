// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** search/list payments GET /api/v1/payments */
export async function listPayment(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listPaymentParams,
  options?: { [key: string]: any },
) {
  return request<API.listOutput>('/api/v1/payments', {
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

/** create payment POST /api/v1/payments */
export async function createPayment(body: API.createRequest, options?: { [key: string]: any }) {
  return request<API.Response200>('/api/v1/payments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete payments DELETE /api/v1/payments */
export async function deletePayments(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePaymentsParams,
  options?: { [key: string]: any },
) {
  return request<API.Response200>('/api/v1/payments', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** get payment GET /api/v1/payments/${param0} */
export async function getPayment(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPaymentParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Payment>(`/api/v1/payments/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** update payment PUT /api/v1/payments/${param0} */
export async function updatePayment(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updatePaymentParams,
  body: API.updateRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/payments/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** delete payment DELETE /api/v1/payments/${param0} */
export async function deletePayment(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePaymentParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/payments/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
