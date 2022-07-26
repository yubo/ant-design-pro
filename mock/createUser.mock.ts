// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/v1/users': (req: Request, res: Response) => {
    res.status(200).send({
      data: {
        address: '天津 天津市 武清区',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        createdAt: '2014-06-14 23:29:07',
        email: 'l.stkkb@ntxeuyt.mc',
        group: '前端 6 组',
        id: 72,
        name: '廖强',
        notifyCount: 90,
        phone: '11428057042',
        tags: {
          additionalProp1: '影要道什当十心半人门号文大料。',
          additionalProp2: '而感量公除你儿团反治件现内。',
          additionalProp3: '常育象场速生民道土白决细走值厂。',
        },
        title: '由想收别始效级效社院制形感化北各。',
        unreadCount: 80,
        updatedAt: '2002-11-28 02:12:22',
      },
      host: '去只时全装而书相四办她市反外行而。',
      success: true,
      traceId: '7Ded13fc-d2B0-71eF-1c23-072EaDF12f1f',
    });
  },
};
