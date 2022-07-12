// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/v1/users': (req: Request, res: Response) => {
    res.status(200).send({
      list: [
        {
          address: '广东省 清远市 连州市',
          avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
          createdAt: '2020-02-13 03:25:17',
          email: 'f.gvrd@vgwcpwt.ml',
          group: '',
          id: 66,
          name: '金磊',
          notifyCount: 68,
          phone: '11436888326',
          tags: {
            additionalProp1: '龙公国选算明改热子规火西放性细。',
            additionalProp2: '几回最道信力指命路且局直。',
            additionalProp3: '点派各广众间按身办线而般老却身体。',
          },
          title: '厂作他正关则本线价育与小或增须历委。',
          unreadCount: 66,
          updatedAt: '2010-02-28 19:21:48',
        },
      ],
      total: 65,
    });
  },
};
