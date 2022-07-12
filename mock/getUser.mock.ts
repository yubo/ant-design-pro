// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/v1/users/:name': (req: Request, res: Response) => {
    res.status(200).send({
      address: '广东省 阳江市 阳西县',
      avatar: 'https://avatars0.githubusercontent.com/u/507615?s=40&v=4',
      createdAt: '2018-08-09 05:57:09',
      email: 'a.rqvnewe@gjux.pg',
      group: '创新科技组',
      id: 72,
      name: '谢秀兰',
      notifyCount: 64,
      phone: '11476270726',
      tags: {
        additionalProp1: '着新参准即此代能老种或列委着。',
        additionalProp2: '专安多油为速速许子完少月打。',
        additionalProp3: '无到每入片起观同自无北合用来。',
      },
      title: '先周准然产器群市达算打除条直。',
      unreadCount: 91,
      updatedAt: '2007-01-19 13:36:56',
    });
  },
};
