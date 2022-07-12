// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** get the code version GET /version */
export async function getCodeVersion(options?: { [key: string]: any }) {
  return request<API.Info>('/version', {
    method: 'GET',
    ...(options || {}),
  });
}
