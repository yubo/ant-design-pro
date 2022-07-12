// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 发送验证码 POST /api/v1/account/captcha */
export async function accountCaptcha(body: API.CaptchaInput, options?: { [key: string]: any }) {
  return request<any>('/api/v1/account/captcha', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** get curent user info GET /api/v1/account/info */
export async function accountInfo(options?: { [key: string]: any }) {
  return request<API.User>('/api/v1/account/info', {
    method: 'GET',
    ...(options || {}),
  });
}

/** account login POST /api/v1/account/login */
export async function accountLogin(body: API.LoginInput, options?: { [key: string]: any }) {
  return request<API.LoginOutput>('/api/v1/account/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** account logout POST /api/v1/account/logout */
export async function accountLogout(options?: { [key: string]: any }) {
  return request<any>('/api/v1/account/logout', {
    method: 'POST',
    ...(options || {}),
  });
}
