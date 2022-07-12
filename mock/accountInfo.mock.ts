// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/v1/account/info': (req: Request, res: Response) => {
    res.status(200).send({
      address: '内蒙古自治区 巴彦淖尔市 杭锦后旗',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      createdAt: '2002-11-22 17:00:00',
      email: 's.tckkiusuep@ype.gov.cn',
      group: '区块链平台部',
      id: 79,
      name: '萧刚',
      notifyCount: 80,
      phone: '11234869492',
      tags: {
        additionalProp1: '温示是六子照易面调阶状如育。',
        additionalProp2: '没定如做众老派声包自质往道美。',
        additionalProp3: '入区火验同史王文想历越各共斯价取气。',
      },
      title: '来而品速务约即价响求情文话路期。',
      unreadCount: 65,
      updatedAt: '1994-09-13 21:18:04',
    });
  },
};
