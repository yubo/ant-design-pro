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

  type BookedCourse = {
    data?: BookedCourse[];
    host?: string;
    success: boolean;
    traceId?: string;
  };

  type BookedCourse = {
    /** 换课课程id */
    changeId: number;
    /** 课程名称 */
    courseName: string;
    createdAt: number;
    creator: string;
    /** date format: 2006-01-02 */
    date: string;
    /** 课程id */
    id: number;
    /** order id */
    orderId: number;
    /** 原课程id */
    origId: number;
    /** 课程编号, 一天的第几节课 */
    seq: number;
    /** start time */
    start: number;
    /** 状态 */
    status: string;
    /** 状态 */
    statusName: string;
    /** stop time */
    stop: number;
    /** 学生 id */
    studentId: number;
    /** 老师 id */
    teacherId: number;
    updatedAt: number;
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

  type Color = {
    b: string;
    g: string;
    r: string;
  };

  type Comment = {
    /** 课程id */
    bookedCourseId: number;
    /** 评语内容 */
    comment: string;
    /** 课程数量 */
    courseCnt: number;
    /** 课程名称 */
    courseName: string;
    /** 创建时间 */
    createdAt: number;
    /** 评语id */
    id: number;
    /** 学生id */
    studentId: number;
    /** 学生姓名 */
    studentName: string;
    /** 老师id */
    teacherId: number;
    /** 老师姓名 */
    teacherName: string;
    /** 更新时间 */
    updatedAt: number;
  };

  type Coupon = Coupon;

  type Coupon = {
    /** 创建时间 */
    createdAt: number;
    /** 创建者 */
    creator: string;
    /** 在折扣价格上，继续扣减的金额，类似代金券, 单位分 */
    deductionPrice: number;
    /** 失效时间 */
    expiresAt: number;
    /** 优惠券id */
    id: number;
    /** 优惠券标题 */
    name: string;
    /** 购买单元商品id */
    skuId: number;
    /** 购买单元商品名称 */
    skuName: string;
    /** 状态 */
    status: string;
    /** 订单状态说明 */
    statusName: string;
    /** 更新时间 */
    updatedAt: number;
    /** 用户id */
    userId: number;
    /** 用户名 */
    userName: string;
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

  type CourseTime = {
    /** 课程名称 */
    name: string;
    /** 机构地址 */
    orgAddress: string;
    seq: number;
    start: number;
    stop: number;
    /** 学生 id */
    studentId: number;
    /** 学生名称 */
    studentName: string;
    /** 老师id */
    teacherId: number;
    /** 老师名称 */
    teacherName: string;
    /** 老师电话 */
    teacherPhone: string;
  };

  type createOrderRequest = {
    /** 备注信息 */
    comment: string;
    /** 购买课程的数量 */
    count: number;
    /** 优惠券id */
    couponId: number;
    /** 开始上课时间时间, 格式 timestamp, 单位秒 */
    date: number;
    /** 选择的课程, 礼拜天:0, 礼拜一: 1, ..., 第一节课是0， 第二节课是2， 以此类推 */
    selectedCourse: selectedCourse[];
    /** sku id */
    skuId: number;
    /** 学生id */
    studentId: number;
    /** 总价 */
    totalAmount: number;
  };

  type createOrderResponse = createOrderResponse;

  type createOrderResponse = {
    /** 订单号 */
    orderNo: string;
    prepayResp: PrepayWithRequestPaymentResponse;
    /** 总价 */
    totalAmount: number;
  };

  type createRefundRequest = {
    /** 订单号 */
    orderNo: string;
    /** 退款原因 */
    reason: string;
  };

  type createRequest = {
    /** 在折扣价格上，继续扣减的金额，类似代金券, 单位分 */
    deductionPrice: number;
    /** 有效期(天) */
    expiresTime: number;
    /** 优惠券名称 */
    name: string;
    /** sku id */
    skuId: number;
    /** user id */
    userId: number;
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
    orderNo: string;
    /** 退票原因 */
    reason: string;
  };

  type createRequest = {
    /** course id */
    courseId: number;
    name: string;
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

  type deleteCouponParams = {
    /** coupon id */
    id: number;
  };

  type deleteCouponsParams = {
    /** coupon id */
    id?: string;
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

  type getAvailableScheduleParams = {
    teacherId?: number;
    studentId?: number;
  };

  type getCouponParams = {
    /** coupon id */
    id: number;
  };

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

  type getOrderCoursesParams = {
    orderNo?: string;
  };

  type getOrderDetailParams = {
    orderNo?: string;
  };

  type getOrderParams = {
    /** order id */
    id: number;
  };

  type getOrgOutAccountParams = {
    /** 可选, 如果为空，默认为useId的第一个老师身份 */
    teacherId?: number;
    /** 可选, 默认为当前登录用户 */
    userId?: number;
    /** 可选，默认为当前值 */
    date?: number;
  };

  type getOrgOutAccountParams = {
    /** 可选, 如果为空，默认为useId的第一个老师身份 */
    teacherId?: number;
    /** 可选, 默认为当前登录用户 */
    userId?: number;
    /** 可选，默认为当前值 */
    date?: number;
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

  type getStudentParams = {
    /** student id */
    id: number;
  };

  type getStudentScheduleParams = {
    studentId?: number;
    /** staring of a week [start, end) */
    date?: number;
  };

  type getStudentScheduleSummaryParams = {
    studentId?: number;
    /** 可选，默认为当前值 */
    date?: number;
  };

  type getTeacherParams = {
    /** teacher id */
    id: number;
  };

  type getTeacherScheduleParams = {
    /** 可选, 如果为空，默认为useId的第一个老师身份 */
    teacherId?: number;
    userId?: number;
    /** staring of a week [start, end) */
    date?: number;
  };

  type getTeacherScheduleSummaryParams = {
    /** 可选, 如果为空，默认为useId的第一个老师身份 */
    teacherId?: number;
    /** 可选, 默认为当前登录用户 */
    userId?: number;
    /** 可选，默认为当前值 */
    date?: number;
  };

  type getUserOutAccountParams = {
    /** 可选, 如果为空，默认为useId的第一个老师身份 */
    teacherId?: number;
    /** 可选, 默认为当前登录用户 */
    userId?: number;
    /** 可选，默认为当前值 */
    date?: number;
  };

  type getUserParams = {
    /** user id */
    id: number;
  };

  type getUserQrcodeRequest = {
    /** 自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调，默认 false */
    auto_color?: boolean;
    /** 默认是true，检查page 是否存在，为 true 时 page 必须是已经发布的小程序存在的页面（否则报错）；为 false 时允许小程序未发布或者 page 不存在， 但page 有数量上限（60000个）请勿滥用。 */
    check_path: boolean;
    /** 要打开的小程序版本。正式版为"release"，体验版为 "trial"，开发版为 "develop"。默认是正式版。 */
    env_version?: string;
    /** 默认是false，是否需要透明底色，为 true 时，生成透明底色的小程序 */
    is_hyaline?: boolean;
    line_color?: Color;
    /** 默认是主页，页面 page，例如 pages/index/index，根路径前不要填加 /，不能携带参数（参数请放在scene字段里），如果不填写这个字段，默认跳主页面。scancode_time为系统保留参数，不允许配置 */
    page?: string;
    /** 默认430，二维码的宽度，单位 px，最小 280px，最大 1280px */
    width?: number;
  };

  type Good = Good;

  type Good = {
    available: boolean;
    description: string;
    images: string[];
    org: Org;
    orgId: number;
    sku: Sku;
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

  type listCommentByTeacherParams = {
    /** 开始时间(2006-01-02) */
    begin?: string;
    /** 结束时间(2006-01-08) */
    end?: string;
    /** 学生id, 选填 */
    studentId?: number;
    /** 老师id, 选填 */
    teacherId?: number;
  };

  type listCommentByUserParams = {
    /** 开始时间(2006-01-02) */
    begin?: string;
    /** 结束时间(2006-01-08) */
    end?: string;
    /** 学生id, 选填 */
    studentId?: number;
    /** 老师id, 选填 */
    teacherId?: number;
  };

  type listCommentResponse = listCommentResponse;

  type listCommentResponse = {
    list: Comment[];
    total: number;
  };

  type listCouponParams = {
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

  type listLogParams = {
    /** org id */
    'org-id': number;
    /** 按月查询时间(2006-01) */
    time?: string;
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

  type listLogParams = {
    /** teacher id */
    'teacher-id': number;
    /** 按月查询时间(2006-01) */
    time?: string;
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

  type listLogParams = {
    /** user id */
    'user-id': number;
    /** 按月查询时间(2006-01) */
    time?: string;
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
    /** 老师的id, 老师或者用户必须填一个 */
    teacherId?: number;
    /** 用户id(购课用户) */
    userId?: number;
    /** 学生id, 选填 */
    studentId?: number;
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
    /** status=pay_success|pay_failure */
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

  type listOrderResponse = listOrderResponse;

  type listOrderResponse = {
    list: Order[];
    total: number;
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

  type listOutput = listOutput;

  type listOutput = {
    list: Coupon[];
    total: number;
  };

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
    list: Log[];
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

  type listStudentParams = {
    /** query */
    query?: string;
    /** 显示所有学生，仅管理员使用 */
    all?: boolean;
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

  type Log = {
    createdAt: number;
    /** 动作事件 */
    event: string;
    /** id */
    id: number;
    /** message */
    message: string;
    orderNo: string;
    /** 所属机构Id */
    orgId: number;
    /** 老师 id */
    teacherId: number;
    /** 实际支付总价 */
    totalAmount: number;
    /** 用户id */
    userId: number;
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
    /** 登陆类型 */
    type: 'miniprogram' | 'weixin' | 'password' | 'phone';
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
    /** 开始上课时间 */
    begin: number;
    /** 订单备注 */
    comment: string;
    /** 课程数量 */
    count: number;
    /** 优惠券id */
    couponId: number;
    /** 创建时间 */
    createdAt: number;
    /** 创建者 */
    creator: string;
    date: number;
    /** 在折扣价格上，继续扣减的金额，类似代金券, 单位分 */
    deductionPrice: number;
    /** 结束时间 */
    end: number;
    /** 课程id */
    id: number;
    orderNo: string;
    /** openid, 微信小程序 */
    payer: string;
    /** 订单号 */
    payment: string;
    selectedCourse: selectedCourse[];
    sku: Sku;
    /** 课程id */
    skuId: number;
    /** 订单状态 */
    status: string;
    /** 订单状态说明 */
    statusName: string;
    /** 老师id */
    steacherId: number;
    /** 老师名称 */
    steacherName: string;
    student: Student;
    /** 学生id */
    studentId: number;
    /** 实际支付总价 */
    totalAmount: number;
    /** 原价 */
    totalPrice: number;
    /** 更新时间 */
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

  type PrepayWithRequestPaymentResponse = {
    appId: string;
    nonceStr: string;
    package: string;
    paySign: string;
    prepay_id: string;
    signType: string;
    timeStamp: string;
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

  type rechargeOrderRequest = {
    /** 备注信息 */
    comment: string;
    /** 续费课程的数量 */
    count: number;
    /** 优惠券id */
    couponId: number;
    /** 续费的原始订单号 */
    orderNo: string;
    /** 总价 */
    totalAmount: number;
  };

  type rechargeOrderResponse = rechargeOrderResponse;

  type rechargeOrderResponse = {
    /** 订单号 */
    orderNo: string;
    prepayResp: PrepayWithRequestPaymentResponse;
    /** 总价 */
    totalAmount: number;
  };

  type Refund = Refund;

  type Refund = {
    /** 退款额，单位分 */
    amount: number;
    createdAt: number;
    creator: string;
    /** id */
    id: number;
    order: Order;
    orderNo: string;
    /** 退票原因 */
    reason: string;
    refundNo: string;
    /** 退款单状态 */
    status: string;
    /** 退款单状态说明 */
    statusName: string;
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
    slected: slected[];
  };

  type ScheduleDay = {
    bookedCourse: CourseTime[];
    course: CourseTime[];
    date: number;
    dateRemark: string;
  };

  type scheduleResponse = scheduleResponse;

  type scheduleResponse = {
    data: ScheduleDay[];
    date: number;
    type: string;
  };

  type ScheduleSchema = {
    /** 上午几节课 */
    amNum: number;
    /** 上午开课时间 */
    amStart: number;
    /** 每节课时长(包括课间休息) */
    courseDuration: number;
    /** 下午几节课 */
    pmNum: number;
    /** 下午开课时间 */
    pmStart: number;
    /** 每周工作日 */
    workDays: number[];
  };

  type selectedCourse = Record<string, any>;

  type selectedCourse = Record<string, any>;

  type setCommentRequest = {
    /** 课程id号，为时间范围内的第一节课 */
    bookedCourseId: number;
    /** 老师评语 */
    comment: string;
  };

  type Sku = Sku;

  type Sku = {
    /** available */
    available: boolean;
    /** 课程数量,用户在购买时无法修改 */
    count: number;
    /** course id */
    courseId: number;
    /** course name */
    courseName: string;
    createdAt: number;
    creator: string;
    /** 商品描述 */
    description: string;
    /** 课程id */
    id: number;
    /** 简介图片 */
    images: string[];
    /** 课程标题 */
    name: string;
    org: Org;
    /** OrgId */
    orgId: number;
    /** 机构负责人id */
    ownerId: number;
    /** 每节课价格，单位: 分 */
    price: number;
    /** 每节课折扣价格，单位: 分 */
    salePrice: number;
    teacher: Teacher;
    /** teacher id */
    teacherId: number;
    updatedAt: number;
  };

  type slected = Record<string, any>;

  type Student = Student;

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

  type StudentScheduleSummary = {
    address: string;
    courseCnt: number;
    name: string;
    phoneNumber: string;
    teacherId: number;
    teacherName: string;
  };

  type studentScheduleSummaryResponse = studentScheduleSummaryResponse;

  type studentScheduleSummaryResponse = {
    data: StudentScheduleSummary[];
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

  type TeacherScheduleSummary = {
    courseCnt: number;
    name: string;
    phoneNumber: string;
    studentId: number;
    studentName: string;
    teacherId: number;
    teacherName: string;
  };

  type teacherScheduleSummaryResponse = teacherScheduleSummaryResponse;

  type teacherScheduleSummaryResponse = {
    data: TeacherScheduleSummary[];
  };

  type updateCouponParams = {
    /** coupon id */
    id: number;
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
    /** 在折扣价格上，继续扣减的金额，类似代金券, 单位分 */
    deductionPrice: number;
    /** 失效时间 */
    expiresAt: number;
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
    id: number;
    name: string;
    phone: string;
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
    /** 城市 */
    city: string;
    /** 社区 */
    community: string;
    /** 国家 */
    country: string;
    /** 区 */
    district: string;
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
    /** 省 */
    province: string;
    /** 街道 */
    street: string;
  };

  type updateSelfParams = {
    /** user id */
    id: number;
  };

  type updateSelfRequest = {
    /** 家庭住址 */
    address: string;
    avatar: string;
    /** 城市 */
    city: string;
    /** 社区 */
    community: string;
    /** 国家 */
    country: string;
    /** 区 */
    district: string;
    /** email */
    email: string;
    nickname: string;
    /** profile */
    profile: string;
    /** 省 */
    province: string;
    /** 街道 */
    street: string;
  };

  type updateSkuParams = {
    /** sku id */
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

  type updateUserPhoneNumberRequest = {
    /** 手机号获取凭证 https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/phone-number/getPhoneNumber.html */
    code: string;
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
    /** 城市 */
    city: string;
    /** 社区 */
    community: string;
    /** 国家 */
    country: string;
    createdAt: number;
    creator: string;
    /** 区 */
    district: string;
    email: string;
    /** 所在分组 */
    groups: string[];
    /** user id */
    id: number;
    /** 介绍人, user.id */
    introducerId: number;
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
    /** 省 */
    province: string;
    /** 1为男性，2为女性 */
    sex: number;
    /** 对外分享号 */
    shareNo: string;
    /** 街道 */
    street: string;
    /** app在微信里的 unionid 编号 */
    unionid: string;
    updatedAt: number;
    /** website openid */
    wOpenid: string;
  };
}
