declare namespace API {
  type AuthorizerResponse = AuthorizerResponse;

  type AuthorizerResponse = {
    appid: string;
    scope: string;
    state: string;
  };

  type authSignatureParams = {
    signature?: string;
    timestamp?: string;
    nonce?: string;
    echostr?: string;
  };

  type captchaRequest = {
    mobile: string;
  };

  type captchaResponse = captchaResponse;

  type captchaResponse = {
    fakeCaptcha: string;
  };

  type Course = Course;

  type Course = {
    /** 上课地址 */
    address: string;
    /** 课程备注, 课堂笔记 */
    comment: string;
    createdAt: number;
    creator: string;
    /** 课程id */
    id: number;
    name: string;
    /** 订单号 */
    payment: string;
    /** 课程id */
    skuId: string;
    /** 课程状态 */
    status: string;
    /** 学生id */
    studentId: string;
    /** 老师id */
    teacherId: string;
    /** 课程名称 */
    title: string;
    updatedAt: number;
  };

  type createRequest = {
    id: number;
    name: string;
  };

  type createRequest = {
    name: string;
  };

  type createRequest = {
    name: string;
  };

  type createRequest = {
    name: string;
  };

  type createRequest = {
    name: string;
  };

  type createRequest = {
    name: string;
  };

  type createRequest = {
    name: string;
  };

  type createRequest = {
    name: string;
  };

  type createRequest = {
    name: string;
  };

  type deleteCourseParams = {
    /** resource name */
    id: number;
  };

  type deleteFileParams = {
    /** file path */
    filepath?: string;
  };

  type deleteOrderParams = {
    /** order id */
    id: number;
  };

  type deleteOrgParams = {
    /** org id */
    id: number;
  };

  type deleteOrgsParams = {
    /** org id */
    id?: string;
  };

  type deletePaymentParams = {
    /** payment id */
    id: number;
  };

  type deleteRefundParams = {
    /** refund id */
    id: number;
  };

  type deleteSkuParams = {
    /** sku id */
    id: number;
  };

  type deleteSpuParams = {
    /** spu id */
    id: number;
  };

  type deleteStudentParams = {
    /** student id */
    id: number;
  };

  type deleteTeacherParams = {
    /** teacher id */
    id: number;
  };

  type deleteUserParams = {
    /** user id */
    id: number;
  };

  type deleteUsersParams = {
    /** user id */
    id?: string;
  };

  type getCourseParams = {
    /** resource name */
    id: number;
  };

  type getOrderParams = {
    /** order id */
    id: number;
  };

  type getOrgParams = {
    /** org id */
    id: number;
  };

  type getPaymentParams = {
    /** payment id */
    id: number;
  };

  type getRefundParams = {
    /** refund id */
    id: number;
  };

  type getSkuParams = {
    /** sku id */
    id: number;
  };

  type getSpuParams = {
    /** spu id */
    id: number;
  };

  type getStudentParams = {
    /** student id */
    id: number;
  };

  type getTeacherParams = {
    /** teacher id */
    id: number;
  };

  type getUserParams = {
    /** user id */
    id: number;
  };

  type Info = {
    buildDate: string;
    compiler: string;
    gitCommit: string;
    gitTreeState: string;
    gitVersion: string;
    goVersion: string;
    major: string;
    minor: string;
    platform: string;
  };

  type integer = {
    data?: number[];
    host?: string;
    success: boolean;
    traceId?: string;
  };

  type listCourseOutput = listCourseOutput;

  type listCourseOutput = {
    list: Course[];
    total: number;
  };

  type listCourseParams = {
    /** query */
    query?: string;
    /** page size */
    pageSize?: number;
    /** current page number, start at 1(defualt) */
    current?: number;
    /** column name */
    sorter?: string;
    /** asc(default)/desc */
    order?: 'asc' | 'desc';
  };

  type listOrderParams = {
    /** query */
    query?: string;
    /** page size */
    pageSize?: number;
    /** current page number, start at 1(defualt) */
    current?: number;
    /** column name */
    sorter?: string;
    /** asc(default)/desc */
    order?: 'asc' | 'desc';
  };

  type listOrgParams = {
    /** query */
    query?: string;
    /** page size */
    pageSize?: number;
    /** current page number, start at 1(defualt) */
    current?: number;
    /** column name */
    sorter?: string;
    /** asc(default)/desc */
    order?: 'asc' | 'desc';
  };

  type listOutput = listOutput;

  type listOutput = listOutput;

  type listOutput = listOutput;

  type listOutput = listOutput;

  type listOutput = listOutput;

  type listOutput = listOutput;

  type listOutput = listOutput;

  type listOutput = listOutput;

  type listOutput = listOutput;

  type listOutput = {
    list: Order[];
    total: number;
  };

  type listOutput = {
    list: Org[];
    total: number;
  };

  type listOutput = {
    list: Payment[];
    total: number;
  };

  type listOutput = {
    list: Refund[];
    total: number;
  };

  type listOutput = {
    list: Sku[];
    total: number;
  };

  type listOutput = {
    list: Spu[];
    total: number;
  };

  type listOutput = {
    list: Student[];
    total: number;
  };

  type listOutput = {
    list: Teacher[];
    total: number;
  };

  type listOutput = {
    list: User[];
    total: number;
  };

  type listPaymentParams = {
    /** query */
    query?: string;
    /** page size */
    pageSize?: number;
    /** current page number, start at 1(defualt) */
    current?: number;
    /** column name */
    sorter?: string;
    /** asc(default)/desc */
    order?: 'asc' | 'desc';
  };

  type listRefundParams = {
    /** query */
    query?: string;
    /** page size */
    pageSize?: number;
    /** current page number, start at 1(defualt) */
    current?: number;
    /** column name */
    sorter?: string;
    /** asc(default)/desc */
    order?: 'asc' | 'desc';
  };

  type listSkuParams = {
    /** query */
    query?: string;
    /** page size */
    pageSize?: number;
    /** current page number, start at 1(defualt) */
    current?: number;
    /** column name */
    sorter?: string;
    /** asc(default)/desc */
    order?: 'asc' | 'desc';
  };

  type listSpuParams = {
    /** query */
    query?: string;
    /** page size */
    pageSize?: number;
    /** current page number, start at 1(defualt) */
    current?: number;
    /** column name */
    sorter?: string;
    /** asc(default)/desc */
    order?: 'asc' | 'desc';
  };

  type listStudentParams = {
    /** query */
    query?: string;
    /** page size */
    pageSize?: number;
    /** current page number, start at 1(defualt) */
    current?: number;
    /** column name */
    sorter?: string;
    /** asc(default)/desc */
    order?: 'asc' | 'desc';
  };

  type listTeacherParams = {
    /** query */
    query?: string;
    /** page size */
    pageSize?: number;
    /** current page number, start at 1(defualt) */
    current?: number;
    /** column name */
    sorter?: string;
    /** asc(default)/desc */
    order?: 'asc' | 'desc';
  };

  type listUserParams = {
    /** query */
    query?: string;
    /** page size */
    pageSize?: number;
    /** current page number, start at 1(defualt) */
    current?: number;
    /** column name */
    sorter?: string;
    /** asc(default)/desc */
    order?: 'asc' | 'desc';
  };

  type LoginRequest = {
    /** 自动登陆 */
    autoLogin: boolean;
    /** 手机验证码 */
    captcha: string;
    /** oauth2 code, https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html */
    code: string;
    /** 手机号，用于手机验证码登陆 */
    mobile: string;
    password: string;
    /** oauth2 state */
    state: string;
    /** 登陆类型, wechat, password, captcha */
    type: string;
    username: string;
  };

  type Order = Order;

  type Order = {
    end: number;
    /** user id */
    id: number;
    start: number;
    /** 类型 */
    type: string;
  };

  type Org = Org;

  type Org = {
    /** 机构地址 */
    address: string;
    /** 机构id */
    id: number;
    /** 机构简介图片 */
    images: string[];
    /** 机构名称 */
    name: string;
    /** 是否直营店 */
    native: boolean;
    /** 机构负责人 */
    owner: string;
    /** 机构简介 */
    ownerId: string;
    payAccount: PayAccount;
  };

  type PayAccount = {
    /** 账号 */
    accountNo: string;
    /** 附加字段1 */
    attr1: string;
    /** 附加字段2 */
    attr2: string;
    /** pay account id */
    id: number;
    /** 付款类型 */
    type: string;
    /** 用户id */
    userID: number;
  };

  type Payment = Payment;

  type Payment = {
    amountCurrency: string;
    amountTotal: number;
    /** 附加数据 */
    attach: string;
    createdAt: number;
    /** 商品描述 */
    description: string;
    detail: string;
    /** 商品标记，代金券或立减优惠功能的参数。 */
    goods_tag: string;
    /** id */
    id: number;
    /** 指定支付方式 */
    limit_pay: string[];
    /** trade_no */
    name: string;
    openID: string;
    provider: string;
    /** 退款单号 */
    refund: string;
    scene_info: string;
    settle_info: string;
    status: string;
    support_fapiao: boolean;
    /** 订单失效时间，格式为rfc3339格式 */
    time_expire: number;
    updatedAt: number;
  };

  type Refund = Refund;

  type Refund = {
    createdAt: number;
    creator: string;
    /** id */
    id: number;
    name: string;
    /** 订单号 */
    payment: string;
    status: string;
    updatedAt: number;
  };

  type Response200 = {
    host?: string;
    success: boolean;
    traceId?: string;
  };

  type Response400 = {
    errorCode: string;
    errorMessage: string;
    success: boolean;
  };

  type Sku = Sku;

  type Sku = {
    /** 上课地址 */
    address: string;
    /** 课程备注 */
    comment: string;
    createdAt: number;
    creator: string;
    /** 课程描述 */
    description: string;
    /** 课程id */
    id: number;
    /** 课程名称 */
    name: string;
    /** 价格，单位: 分 */
    price: number;
    /** 商品id */
    spuId: number;
    /** 老师id */
    teacher: string;
    /** 课程标题 */
    title: string;
    updatedAt: number;
  };

  type Spu = Spu;

  type Spu = {
    /** 上课地址 */
    address: string;
    /** 课程备注 */
    comment: string;
    createdAt: number;
    creator: string;
    /** 课程描述 */
    description: string;
    /** 课程id */
    id: number;
    /** 课程名称 */
    name: string;
    /** 价格，单位: 分 */
    price: number;
    /** 商品id */
    spuId: number;
    /** 老师id */
    teacher: string;
    /** 课程标题 */
    title: string;
    updatedAt: number;
  };

  type Student = Student;

  type Student = {
    createdAt: number;
    creator: string;
    /** 学生显示名称 */
    displayName: string;
    /** id */
    id: number;
    /** 学生身份证 */
    idNum: string;
    /** 学生账号名 */
    name: string;
    /** 家长名称 */
    parentName: string;
    updatedAt: number;
  };

  type Teacher = Teacher;

  type Teacher = {
    /** 工作地点 */
    address: string;
    /** 课程收费， 单位分/小时 */
    courseFee: number;
    /** 课程时长 */
    courseTime: number;
    /** 课程类型 */
    courseType: string;
    createdAt: number;
    creator: string;
    /** 老师id */
    id: number;
    /** 身份证 */
    idNumber: string;
    /** 最多学生人数 */
    maxStudents: number;
    /** 关联 user.Name */
    name: string;
    /** 所属机构 */
    org: string;
    /** 提成比例 1~100 */
    percentage: number;
    /** 自有，机构，加盟 */
    type: string;
    updatedAt: number;
    /** 工作年限 */
    workingYears: string;
  };

  type updateCourseParams = {
    /** resource name */
    id: number;
  };

  type updateInput = {
    /** 课程备注, 课堂笔记 */
    comment: string;
    id: number;
  };

  type updateOrderParams = {
    /** order id */
    id: number;
  };

  type updateOrgParams = {
    /** org id */
    id: number;
  };

  type updatePaymentParams = {
    /** payment id */
    id: number;
  };

  type updateRefundParams = {
    /** refund id */
    id: number;
  };

  type updateRequest = Record<string, any>;

  type updateRequest = {
    /** 机构地址 */
    address: string;
    /** 机构简介图片 */
    images: string[];
    /** 机构名称 */
    name: string;
    /** 是否直营店 */
    native: boolean;
    /** 机构负责人 */
    owner: string;
    /** 机构简介 */
    ownerId: string;
    payAccount: PayAccount;
  };

  type updateRequest = Record<string, any>;

  type updateRequest = Record<string, any>;

  type updateRequest = Record<string, any>;

  type updateRequest = Record<string, any>;

  type updateRequest = Record<string, any>;

  type updateRequest = Record<string, any>;

  type updateRequest = {
    /** 家庭住址 */
    address: string;
    avatar: string;
    groups: string[];
    isAdmin: boolean;
    isRoot: boolean;
    nickname: string;
    /** 手机号 */
    phone: string;
  };

  type updateSkuParams = {
    /** sku id */
    id: number;
  };

  type updateSpuParams = {
    /** spu id */
    id: number;
  };

  type updateStudentParams = {
    /** student id */
    id: number;
  };

  type updateTeacherParams = {
    /** teacher id */
    id: number;
  };

  type updateUserParams = {
    /** user id */
    id: number;
  };

  type uploadFileResponse = uploadFileResponse;

  type uploadFileResponse = {
    filepaths: string[];
  };

  type User = User;

  type User = {
    /** 收款账号 */
    accountNo: string;
    address: string;
    avatar: string;
    createdAt: number;
    creator: string;
    /** 所在分组 */
    groups: string[];
    /** user id */
    id: number;
    /** 介绍人, user.Name */
    introducer: string;
    /** 管理员 */
    isAdmin: boolean;
    /** 机构管理员 */
    isOrgAdmin: boolean;
    /** 超级管理员 */
    isRoot: boolean;
    /** 教师 */
    isTeacher: boolean;
    /** miniprogram openid */
    mOpenid: string;
    name: string;
    /** 别名 */
    nickname: string;
    payAccount: PayAccount;
    /** 手机号 */
    phone: string;
    /** 1为男性，2为女性 */
    sex: number;
    /** 对外分享号 */
    shareNo: string;
    /** app在微信里的 unionid 编号 */
    unionid: string;
    updatedAt: number;
    /** website openid */
    wOpenid: string;
  };
}
