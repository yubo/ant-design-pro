// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/v1/users': (req: Request, res: Response) => {
    res.status(200).send({
      address: '宁夏回族自治区 银川市 其它区',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      createdAt: '1984-12-19 15:40:43',
      email: 'v.coddzp@nupftz.ki',
      group: '前端 6 组',
      id: 93,
      name: '叶秀英',
      notifyCount: 67,
      phone: '11275545573',
      tags: {
        additionalProp1: '者适广况类况状条交通亲油四素只认见。',
        additionalProp2: '此离适复议十法点位用标被多力院社。',
        additionalProp3: '边少队出织备油该入内通界酸直了。',
      },
      title: '育按每共象体教五利什转目边。',
      unreadCount: 62,
      updatedAt: '2011-11-27 08:41:08',
    });
  },
};
