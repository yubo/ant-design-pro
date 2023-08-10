// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** search/list coupons GET /api/v1/coupons */
export async function listCoupon(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listCouponParams,
  options?: { [key: string]: any },
) {
  return request<API.listOutput>('/api/v1/coupons', {
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

/** create coupon POST /api/v1/coupons */
export async function createCoupon(body: API.createRequest, options?: { [key: string]: any }) {
  return request<API.Response200>('/api/v1/coupons', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** delete coupons DELETE /api/v1/coupons */
export async function deleteCoupons(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteCouponsParams,
  options?: { [key: string]: any },
) {
  return request<API.Response200>('/api/v1/coupons', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** get coupon GET /api/v1/coupons/${param0} */
export async function getCoupon(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCouponParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Coupon>(`/api/v1/coupons/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** update coupon PUT /api/v1/coupons/${param0} */
export async function updateCoupon(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateCouponParams,
  body: API.updateRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/coupons/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** delete coupon DELETE /api/v1/coupons/${param0} */
export async function deleteCoupon(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteCouponParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response200>(`/api/v1/coupons/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
