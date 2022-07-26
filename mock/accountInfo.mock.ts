// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/v1/account/info': (req: Request, res: Response) => {
    res.status(200).send({
      address: '贵州省 安顺市 关岭布依族苗族自治县',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      createdAt: '2019-02-02 07:46:36',
      email: 'z.frzdb@rapbuqpc.fm',
      group: '前端 6 组',
      id: 77,
      name: '傅军',
      notifyCount: 68,
      phone: '11479807681',
      tags: {
        additionalProp1: '集位使因增求认事加通多查严划清同。',
        additionalProp2: '他张山达想头工物斯将制完管子九战展看。',
        additionalProp3: '眼平太存运该特科平斯达响称员质习。',
      },
      title: '还明水是人热者情料许到被她太第儿。',
      unreadCount: 83,
      updatedAt: '2012-01-28 06:40:12',
    });
  },
};
