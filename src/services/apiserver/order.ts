// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** search/list orders acl(login) GET /api/v1/orders */
export async function listOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listOrderParams,
  options?: { [key: string]: any },
) {
  return request<API.listOutput>('/api/v1/orders', {
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

/** create order acl(forbidden) POST /api/v1/orders */
export async function createOrder(body: API.createRequest, options?: { [key: string]: any }) {
  return request<API.Response200>('/api/v1/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete orders acl(forbidden) DELETE /api/v1/orders */
export async function deleteOrders(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteOrdersParams,
  options?: { [key: string]: any },
) {
  return request<API.Response200>('/api/v1/orders', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** get order acl(login) GET /api/v1/orders/${param0} */
export async function getOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrderParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Order>(`/api/v1/orders/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** update order acl(forbidden) PUT /api/v1/orders/${param0} */
export async function updateOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateOrderParams,
  body: API.updateRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/orders/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** delete order acl(forbidden) DELETE /api/v1/orders/${param0} */
export async function deleteOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteOrderParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/orders/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
