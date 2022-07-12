// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /version': (req: Request, res: Response) => {
    res.status(200).send({
      buildDate: '府权真规快必史每员周么斗果。',
      compiler: '却备精效集月划度也非切况清六少使土。',
      gitCommit: '圆位难头工离越严加状展决毛。',
      gitTreeState: '正验时方花成军东八过联己保。',
      gitVersion: '步他般写于主马白率酸器每术很。',
      goVersion: '反听此活清规但织象步济影又人员便件。',
      major: '效日律很号那水平率世层容向林经半。',
      minor: '情定光干候七实油石快长各金布调。',
      platform: '声科产林美果号新青叫合争入细。',
    });
  },
};
