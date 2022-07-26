declare namespace API {
  type CaptchaInput = {
    phone: string;
  };

  type CreateUserInput = {
    address: string;
    avatar: string;
    email: string;
    group: string;
    name: string;
    phone: string;
    tags: Record<string, any>;
    title: string;
  };

  type deleteUserParams = {
    name: string;
  };

  type getUserParams = {
    name: string;
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

  type ListUserOutput = ListUserOutput;

  type ListUserOutput = {
    list: User[];
    total: number;
  };

  type listUserParams = {
    /** query user */
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

  type LoginInput = {
    autoLogin: boolean;
    password: string;
    type: string;
    username: string;
  };

  type LoginOutput = {
    currentAuthority: string;
    type: string;
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

  type UpdateUserInput = {
    address: string;
    avatar: string;
    email: string;
    group: string;
    name: string;
    phone: string;
    tags: Record<string, any>;
    title: string;
  };

  type User = User;

  type User = {
    address: string;
    avatar: string;
    createdAt: string;
    email: string;
    group: string;
    id: number;
    name: string;
    notifyCount: number;
    phone: string;
    tags: Record<string, any>;
    title: string;
    unreadCount: number;
    updatedAt: string;
  };
}
