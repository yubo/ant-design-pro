import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;

/**
 * 当前用户的权限，如果为空代表没登录
 * current user groups， if is '', user need login
 * 如果是 pro 的预览，默认是有权限的
 */
let groups =
  ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site'
    ? ['system:masters', 'system:authenticated']
    : ['system:unauthenticated'];

const getGroups = () => {
  return groups;
};

export default {
  'GET /api/v1/auth/captcha': (req: Request, res: Response) => {
    res.status(200).send({
      data: { fakeCaptcha: '1234' },
      host: '作数住自真合面定长组成华起意。',
      success: true,
      traceId: 'b3d61422-E1cD-728f-d0BA-ADD79FE1Be8e',
    });
  },
  'GET /api/v1/auth/info': (req: Request, res: Response) => {
    if (getGroups().includes('system:unauthenticated')) {
      res.status(401).send({
        data: {
          isLogin: false,
        },
        errorCode: '401',
        errorMessage: '请先登录！',
        success: true,
      });
      return;
    }

    res.status(200).send({
      data: {
        accountNo: '123',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        city: '十堰市',
        country: '墨西哥',
        createdAt: 66,
        creator: 'system',
        groups: getGroups(),
        id: 86,
        introducer: '测试账号',
        mOpenid: '1dfB1CE0-A042-f7bf-1F9A-9D2E0CDCDE49',
        name: 'tom',
        nickname: 'tom',
        payAccount: {
          accountNo: '包率口眼动半行级本根连务科易。',
          attr1: '油格内存商识队住结料世步研。',
          attr2: '全期民也以空小严门作管度别设使日。',
          id: 75,
          type: 1,
          userID: 63,
        },
        phone: '11239839064',
        province: '山西省',
        sex: 1,
        shareNo: '123',
        unionid: '6a7CC54A-d6eD-57dE-77A2-c8Dc4cfAcc2A',
        updatedAt: 98,
        wOpenid: '34CAC05b-D3ff-4BDE-Ec61-cfFbe4b5FfFf',
      },
      host: '许好些铁白区属好易和听府装开。',
      success: true,
      traceId: '7E576BCd-9a7b-980c-16Ae-C4F4dcf68045',
    });
  },
  'POST /api/v1/auth/login': async (req: Request, res: Response) => {
    const { password, username, type } = req.body;
    await waitTime(2000);

    if (password === 'admin' && username === 'admin') {
      res.send({
        success: true,
        type,
      });
      groups = ['system:masters', 'system:authenticated'];
      return;
    }
    if (password === 'teacher' && username === 'teacher') {
      res.send({
        success: true,
        type,
      });
      groups = ['teacher'];
      return;
    }
    if (password === 'user' && username === 'user') {
      res.send({
        success: true,
        type,
      });
      groups = ['system:authenticated'];
      return;
    }
    if (type === 'mobile') {
      res.send({
        success: true,
        type,
      });
      groups = ['system:masters', 'system:authenticated'];
      return;
    }

    res.send({
      success: false,
      type,
    });
  },
  'POST /api/v1/auth/logout': (req: Request, res: Response) => {
    groups = ['system:unauthenticated'];
    res.send({ data: {}, success: true });
  },
};
