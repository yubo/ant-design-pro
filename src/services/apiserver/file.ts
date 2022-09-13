// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** create file POST /api/v1/files */
export async function createFile(options?: { [key: string]: any }) {
  return request<API.uploadFileResponse>('/api/v1/files', {
    method: 'POST',
    ...(options || {}),
  });
}

/** delete file DELETE /api/v1/files */
export async function deleteFile(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteFileParams,
  options?: { [key: string]: any },
) {
  return request<API.Response200>('/api/v1/files', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
