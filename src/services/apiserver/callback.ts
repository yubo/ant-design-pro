// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** callback refund POST /api/v1/callback/refund */
export async function callbackRefund(options?: { [key: string]: any }) {
  return request<API.Response200>('/api/v1/callback/refund', {
    method: 'POST',
    ...(options || {}),
  });
}

/** callback transaction POST /api/v1/callback/transaction */
export async function callbackTransaction(options?: { [key: string]: any }) {
  return request<API.Response200>('/api/v1/callback/transaction', {
    method: 'POST',
    ...(options || {}),
  });
}
