// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 创建订单 POST /api/v1/app/create-order */
export async function createOrder(body: API.createOrderRequest, options?: { [key: string]: any }) {
  return request<API.createOrderResponse>('/api/v1/app/create-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建退款单 POST /api/v1/app/create-refund */
export async function createRefund(
  body: API.createRefundRequest,
  options?: { [key: string]: any },
) {
  return request<API.Refund>('/api/v1/app/create-refund', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 结算明细查询 POST /api/v1/app/fetch-settle-detail */
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

/** 获取订单课程 GET /api/v1/app/get-order-courses */
export async function getOrderCourses(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrderCoursesParams,
  options?: { [key: string]: any },
) {
  return request<API.BookedCourse>('/api/v1/app/get-order-courses', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取订单明细 GET /api/v1/app/get-order-detail */
export async function getOrderDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrderDetailParams,
  options?: { [key: string]: any },
) {
  return request<API.Order>('/api/v1/app/get-order-detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 老师查看评语 GET /api/v1/app/list-comment/teacher */
export async function listCommentByTeacher(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listCommentByTeacherParams,
  options?: { [key: string]: any },
) {
  return request<API.listCommentResponse>('/api/v1/app/list-comment/teacher', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 家长查看评语 GET /api/v1/app/list-comment/user */
export async function listCommentByUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listCommentByUserParams,
  options?: { [key: string]: any },
) {
  return request<API.listCommentResponse>('/api/v1/app/list-comment/user', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 订单浏览 GET /api/v1/app/list-order */
export async function listOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listOrderParams,
  options?: { [key: string]: any },
) {
  return request<API.listOrderResponse>('/api/v1/app/list-order', {
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

/** 获取机构的分账详细信息 GET /api/v1/app/out-account/detail */
export async function getOrgOutAccount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrgOutAccountParams,
  options?: { [key: string]: any },
) {
  return request<API.teacherScheduleSummaryResponse>('/api/v1/app/out-account/detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取机构的分账信息 GET /api/v1/app/out-account/org */
export async function getOrgOutAccount_2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrgOutAccount_2Params,
  options?: { [key: string]: any },
) {
  return request<API.teacherScheduleSummaryResponse>('/api/v1/app/out-account/org', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取个人的分账信息 GET /api/v1/app/out-account/user */
export async function getUserOutAccount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserOutAccountParams,
  options?: { [key: string]: any },
) {
  return request<API.teacherScheduleSummaryResponse>('/api/v1/app/out-account/user', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取用户的推荐app二维码, https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/qr-code/getUnlimitedQRCode.html POST /api/v1/app/qrcode/user */
export async function getUserQrcode(
  body: API.getUserQrcodeRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response200>('/api/v1/app/qrcode/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 订单续费 POST /api/v1/app/recharge-order */
export async function rechargeOrder(
  body: API.rechargeOrderRequest,
  options?: { [key: string]: any },
) {
  return request<API.rechargeOrderResponse>('/api/v1/app/recharge-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取学生的课程概要 GET /api/v1/app/schedule-summary/student */
export async function getStudentScheduleSummary(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getStudentScheduleSummaryParams,
  options?: { [key: string]: any },
) {
  return request<API.studentScheduleSummaryResponse>('/api/v1/app/schedule-summary/student', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取老师的课程概要 GET /api/v1/app/schedule-summary/teacher */
export async function getTeacherScheduleSummary(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTeacherScheduleSummaryParams,
  options?: { [key: string]: any },
) {
  return request<API.teacherScheduleSummaryResponse>('/api/v1/app/schedule-summary/teacher', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取 学生对老师 的可选课表，用于购买界面 GET /api/v1/app/schedule/available */
export async function getAvailableSchedule(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAvailableScheduleParams,
  options?: { [key: string]: any },
) {
  return request<API.scheduleResponse>('/api/v1/app/schedule/available', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取学生的课程安排 GET /api/v1/app/schedule/student */
export async function getStudentSchedule(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getStudentScheduleParams,
  options?: { [key: string]: any },
) {
  return request<API.scheduleResponse>('/api/v1/app/schedule/student', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取老师的课程安排 GET /api/v1/app/schedule/teacher */
export async function getTeacherSchedule(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTeacherScheduleParams,
  options?: { [key: string]: any },
) {
  return request<API.scheduleResponse>('/api/v1/app/schedule/teacher', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 老师提交评语, 可以反复提交(未完成) POST /api/v1/app/set-comment/teacher */
export async function setComment(body: API.setCommentRequest, options?: { [key: string]: any }) {
  return request<API.Response200>('/api/v1/app/set-comment/teacher', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取&更新用户手机号 POST /api/v1/app/update-user-phonenumber */
export async function updateUserPhoneNumber(
  body: API.updateUserPhoneNumberRequest,
  options?: { [key: string]: any },
) {
  return request<API.User>('/api/v1/app/update-user-phonenumber', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
