// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取微信登陆二维码地址 GET /api/v1/auth/authorize */
export async function getAuthorizeInfo(options?: { [key: string]: any }) {
  return request<API.AuthorizerResponse>('/api/v1/auth/authorize', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 手机验证码登陆 GET /api/v1/auth/captcha */
export async function authCaptcha(body: API.captchaRequest, options?: { [key: string]: any }) {
  return request<API.captchaResponse>('/api/v1/auth/captcha', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** print auth userinfo GET /api/v1/auth/info */
export async function authInfo(options?: { [key: string]: any }) {
  return request<API.User>('/api/v1/auth/info', {
    method: 'GET',
    ...(options || {}),
  });
}

/** login, 登陆 POST /api/v1/auth/login */
export async function authLogin(body: API.LoginRequest, options?: { [key: string]: any }) {
  return request<API.User>('/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** logout, 注销 POST /api/v1/auth/logout */
export async function authLogout(options?: { [key: string]: any }) {
  return request<API.Response200>('/api/v1/auth/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** signature - 微信接入验证接口 GET /api/v1/auth/signature */
export async function authSignature(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.authSignatureParams,
  options?: { [key: string]: any },
) {
  return request<API.integer>('/api/v1/auth/signature', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
