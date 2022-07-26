// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /version': (req: Request, res: Response) => {
    res.status(200).send({
      buildDate: '行个种身解认角和清界总里做低。',
      compiler: '响约共近少记意省革很活很。',
      gitCommit: '向文国属规头条严全五矿红调活养方。',
      gitTreeState: '采由速近表重当达半真件效合断圆气。',
      gitVersion: '油置统话产根张西热书论识在标。',
      goVersion: '持切六构的她进路示工党度始志制来边。',
      major: '明算多没引方度动斯斯低地五计。',
      minor: '际作价油济示整手八能太今毛好。',
      platform: '利安不目别南也分厂织场片老部。',
    });
  },
};
