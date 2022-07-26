// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/v1/users/:name': (req: Request, res: Response) => {
    res.status(200).send({
      data: {
        address: '浙江省 衢州市 江山市',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
        createdAt: '1984-05-07 06:02:05',
        email: 'x.hmmyjzhp@vdkpxokhz.pm',
        group: '服务技术部',
        id: 81,
        name: '任刚',
        notifyCount: 71,
        phone: '11160367453',
        tags: {
          additionalProp1: '实加种改声火而置组路东感进性。',
          additionalProp2: '效志局手军式气消方然提看严。',
          additionalProp3: '置格非地数领都思精示分究先满须当。',
        },
        title: '率划查切数听土处儿也社严应机斗金者。',
        unreadCount: 76,
        updatedAt: '1978-01-02 08:06:46',
      },
      host: '心质即不学角将间再后先名离。',
      success: false,
      traceId: 'cB4DA9Fa-7c7A-b30b-04ce-FeD78Ef8DADd',
    });
  },
};
