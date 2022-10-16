// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 GET /api/v1/geographic/city/${param0} */
export async function listCity(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listCityParams,
  options?: { [key: string]: any },
) {
  const { province: param0, ...queryParams } = params;
  return request<API.City>(`/api/v1/geographic/city/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/v1/geographic/province */
export async function listProvince(options?: { [key: string]: any }) {
  return request<API.Province>('/api/v1/geographic/province', {
    method: 'GET',
    ...(options || {}),
  });
}
