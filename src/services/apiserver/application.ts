// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** fetch setle detail  POST /api/v1/app/fetch-settle-detail */
export async function fetchSettleDetail(
  body: API.fetchSettleDetailRequest,
  options?: { [key: string]: any },
) {
  return request<API.fetchSettleDetailResponse>('/api/v1/app/fetch-settle-detail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** get schedule data GET /api/v1/app/schedule */
export async function getScheduleData(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getScheduleDataParams,
  options?: { [key: string]: any },
) {
  return request<API.scheduleResponse>('/api/v1/app/schedule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
