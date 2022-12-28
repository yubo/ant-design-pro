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
    phone: string;
  };

  type captchaResponse = captchaResponse;

  type captchaResponse = {
    fakeCaptcha: string;
  };

  type City = {
    data?: City[];
    host?: string;
    success: boolean;
    traceId?: string;
  };

  type City = {
    id: string;
    name: string;
    province: string;
  };

  type Course = Course;

  type Course = {
    createdAt: number;
    creator: string;
    /** 课程描述 */
    description: string;
    /** 课程id */
    id: number;
    /** 机构简介图片 */
    images: string[];
    /** 课程名称 */
    name: string;
    updatedAt: number;
  };

  type createRequest = {
    name: string;
  };

  type createRequest = {
    dateRange: string[];
    name: string;
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
    /** course id */
    courseId: number;
    name: string;
    /** 商品id */
    spuId: number;
  };

  type createRequest = {
    name: string;
    orgId: number;
    teacherId: number;
  };

  type createRequest = {
    /** default */
    isDefault: number;
    name: string;
    phone: string;
  };

  type createRequest = {
    /** 老师名称 */
    name: string;
    /** 所属机构Id */
    orgId: number;
    /** 用户Id */
    userId: number;
  };

  type createRequest = {
    name: string;
  };

  type deleteCourseParams = {
    /** course id */
    id: number;
  };

  type deleteCoursesParams = {
    /** course id */
    id?: string;
  };

  type deleteFileParams = {
    /** file path */
    filepath?: string;
  };

  type deleteHolidayParams = {
    /** holiday id */
    id: number;
  };

  type deleteHolidaysParams = {
    /** spu id */
    id?: string;
  };

  type deleteNoticeParams = {
    /** notice id */
    id: number;
  };

  type deleteOrderParams = {
    /** order id */
    id: number;
  };

  type deleteOrdersParams = {
    /** order id */
    id?: string;
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

  type deletePaymentsParams = {
    /** payment id */
    id?: string;
  };

  type deleteRefundParams = {
    /** refund id */
    id: number;
  };

  type deleteRefundsParams = {
    /** refund id */
    id?: string;
  };

  type deleteSkuParams = {
    /** sku id */
    id: number;
  };

  type deleteSkusParams = {
    /** sku id */
    id?: string;
  };

  type deleteSpuParams = {
    /** spu id */
    id: number;
  };

  type deleteSpusParams = {
    /** spu id */
    id?: string;
  };

  type deleteStudentParams = {
    /** student id */
    id: number;
  };

  type deleteTeacherParams = {
    /** teacher id */
    id: number;
  };

  type deleteTeachersParams = {
    /** user id */
    id?: string;
  };

  type deleteUserParams = {
    /** user id */
    id: number;
  };

  type deleteUsersParams = {
    /** user id */
    id?: string;
  };

  type fetchSettleDetailRequest = Good;

  type fetchSettleDetailResponse = fetchSettleDetailResponse;

  type fetchSettleDetailResponse = Good;

  type getCourseParams = {
    /** course id */
    id: number;
  };

  type getGoodParams = {
    /** good id */
    id: number;
  };

  type getHolidayParams = {
    /** holiday id */
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

  type getScheduleDataParams = {
    skuId?: number;
    /** staring of a week [start, end) */
    date?: number;
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

  type Good = Good;

  type Good = {
    available: boolean;
    description: string;
    images: string[];
    maxLinePrice: number;
    minSalePrice: number;
    org: Org;
    orgId: number;
    skuList: Sku[];
    spuId: number;
    teacher: Teacher;
    title: string;
    video: string;
  };

  type Good = GoodRequest;

  type GoodRequest = {
    checked: boolean;
    quantity: number;
    skuId: number;
    spuId: number;
  };

  type Holiday = Holiday;

  type Holiday = {
    createdAt: number;
    creator: string;
    /** date format: 2006-01-02 */
    date: string;
    /** user id */
    id: number;
    /** 节日名称 */
    name: string;
    updatedAt: number;
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

  type listCityParams = {
    /** province */
    province: string;
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

  type listGoodParams = {
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

  type listHolidayParams = {
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

  type listNoticeParams = {
    /** query selector */
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

  type listOutput = listOutput;

  type listOutput = listOutput;

  type listOutput = listOutput;

  type listOutput = listOutput;

  type listOutput = {
    list: Course[];
    total: number;
  };

  type listOutput = {
    list: Good[];
    total: number;
  };

  type listOutput = {
    list: Holiday[];
    total: number;
  };

  type listOutput = {
    list: Notice[];
    total: number;
  };

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
    password: string;
    /** 手机号，用于手机验证码登陆 */
    phone: string;
    /** oauth2 state */
    state: string;
    /** 登陆类型, weixin, password, phone */
    type: string;
    username: string;
  };

  type Notice = {
    avatar: string;
    datetime: number;
    description: string;
    extra: string;
    /** id */
    id: number;
    key: string;
    read: boolean;
    status: string;
    title: string;
    type: string;
    userName: string;
  };

  type Order = Order;

  type Order = {
    /** 课程备注, 课堂笔记 */
    comment: string;
    createdAt: number;
    creator: string;
    /** 课程id */
    id: number;
    /** 订单号 */
    payment: string;
    sku: Sku;
    /** 课程id */
    skuId: number;
    /** 课程状态 */
    status: string;
    student: Student;
    /** 学生id */
    studentId: string;
    updatedAt: number;
  };

  type Org = Org;

  type Org = {
    /** 机构地址 */
    address: string;
    createdAt: number;
    creator: string;
    /** 机构简介 */
    description: string;
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
    /** 机构负责人id */
    ownerId: number;
    payAccount: PayAccount;
    updatedAt: number;
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
    userId: number;
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
    openid: string;
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

  type Province = {
    data?: Province[];
    host?: string;
    success: boolean;
    traceId?: string;
  };

  type Province = {
    id: string;
    name: string;
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

  type Schedule = {
    checked: boolean;
  };

  type ScheduleCourse = {
    start: number;
    stop: number;
  };

  type ScheduleDay = {
    bookedCourse: ScheduleCourse[];
    course: ScheduleCourse[];
    date: number;
  };

  type scheduleResponse = scheduleResponse;

  type scheduleResponse = {
    date: ScheduleDay[];
  };

  type ScheduleSchema = {
    /** 上午几节课 */
    amNum: number;
    /** 上午开课时间 */
    amStart: number;
    /** 每节课市场(包括课间休息) */
    courseDuration: number;
    /** 下午几节课 */
    pmNum: number;
    /** 下午开课时间 */
    pmStart: number;
    /** 每周工作日 */
    workDays: number[];
  };

  type Sku = Sku;

  type Sku = {
    /** available */
    available: boolean;
    /** 课程数量 */
    count: number;
    /** course id */
    courseId: number;
    /** course name */
    courseName: string;
    createdAt: number;
    creator: string;
    /** 课程id */
    id: number;
    /** 课程标题 */
    name: string;
    /** 每节课价格，单位: 分 */
    price: number;
    /** 每节课折扣价格，单位: 分 */
    salePrice: number;
    /** 商品id */
    spuId: number;
    updatedAt: number;
  };

  type Spu = Spu;

  type Spu = {
    /** available */
    available: boolean;
    createdAt: number;
    creator: string;
    /** 商品描述 */
    description: string;
    /** spu id */
    id: number;
    /** 简介图片 */
    images: string[];
    /** max line price */
    maxLinePrice: number;
    /** min sale Price */
    minSalePrice: number;
    /** 商品标题 */
    name: string;
    org: Org;
    /** OrgId */
    orgId: number;
    /** 机构负责人id */
    ownerId: number;
    skuTotal: number;
    teacher: Teacher;
    /** teacher id */
    teacherId: number;
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
    /** is default */
    isDefault: number;
    /** 学生账号名 */
    name: string;
    /** 家长 */
    owner: string;
    phone: string;
    updatedAt: number;
  };

  type Student = {
    checked: boolean;
    createdAt: number;
    creator: string;
    /** 学生显示名称 */
    displayName: string;
    /** id */
    id: number;
    /** 学生身份证 */
    idNum: string;
    /** is default */
    isDefault: number;
    /** 学生账号名 */
    name: string;
    /** 家长 */
    owner: string;
    phone: string;
    updatedAt: number;
  };

  type Teacher = Teacher;

  type Teacher = {
    /** 上午几节课 */
    amNum: number;
    /** 上午开课时间 */
    amStart: string;
    /** 每节课市场(包括课间休息) */
    courseDuration: number;
    /** 课程收费， 单位分/小时 */
    courseFee: number;
    /** 课程时长 */
    courseTime: number;
    createdAt: number;
    creator: string;
    /** 简介 */
    description: string;
    /** 老师id */
    id: number;
    /** 身份证 */
    idNumber: string;
    /** 图片简介 */
    images: string[];
    /** 最多学生人数 */
    maxStudents: number;
    /** 老师名称 */
    name: string;
    /** 所属机构Id */
    orgId: number;
    /** 所属机构 */
    orgName: string;
    /** 机构负责人 */
    owner: string;
    /** 机构负责人id */
    ownerId: number;
    /** 提成比例 1~100 */
    percentage: number;
    /** 下午几节课 */
    pmNum: number;
    /** 下午开课时间 */
    pmStart: string;
    scheduleSchema: ScheduleSchema;
    updatedAt: number;
    /** 用户Id */
    userId: number;
    /** 用户名 */
    userName: string;
    /** 每周工作日 */
    workDays: string[];
    /** 工作年限 */
    workingYears: number;
  };

  type updateCourseParams = {
    /** course id */
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

  type updateRequest = {
    /** 课程描述 */
    description: string;
    /** 简介图片 */
    images: string[];
  };

  type updateRequest = Record<string, any>;

  type updateRequest = {
    /** 机构地址 */
    address: string;
    /** 机构简介 */
    description: string;
    /** 机构简介图片 */
    images: string[];
    /** 机构名称 */
    name: string;
    /** 是否直营店 */
    native: boolean;
    /** 机构负责人id */
    ownerId: number;
    payAccount: PayAccount;
  };

  type updateRequest = Record<string, any>;

  type updateRequest = Record<string, any>;

  type updateRequest = {
    /** available */
    available: boolean;
    /** 课程数量 */
    count: number;
    /** 每节课价格，单位: 分 */
    price: number;
    /** 每节课折扣价格，单位: 分 */
    salePrice: number;
  };

  type updateRequest = {
    /** available */
    available: boolean;
    /** 商品描述 */
    description: string;
    /** 简介图片 */
    images: string[];
    /** 商品标题 */
    name: string;
  };

  type updateRequest = {
    id: number;
    name: string;
  };

  type updateRequest = {
    /** 上午几节课 */
    amNum: number;
    /** 上午开课时间 */
    amStart: string;
    /** 每节课市场(包括课间休息) */
    courseDuration: number;
    /** 课程收费， 单位分/小时 */
    courseFee: number;
    /** 课程时长 */
    courseTime: number;
    /** 简介 */
    description: string;
    /** 身份证 */
    idNumber: string;
    /** 图片简介 */
    images: string[];
    /** 最多学生人数 */
    maxStudents: number;
    /** 老师名称 */
    name: string;
    /** 提成比例 1~100 */
    percentage: number;
    /** 下午几节课 */
    pmNum: number;
    /** 下午开课时间 */
    pmStart: string;
    /** 每周工作日 */
    workDays: string[];
    /** 工作年限 */
    workingYears: number;
  };

  type updateRequest = {
    /** 家庭住址 */
    address: string;
    avatar: string;
    city: string;
    country: string;
    /** email */
    email: string;
    isAdmin: boolean;
    isOrgAdmin: boolean;
    isRoot: boolean;
    isTeacher: boolean;
    nickname: string;
    /** 手机号 */
    phone: string;
    /** profile */
    profile: string;
    province: string;
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
    city: string;
    country: string;
    createdAt: number;
    creator: string;
    email: string;
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
    profile: string;
    province: string;
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
