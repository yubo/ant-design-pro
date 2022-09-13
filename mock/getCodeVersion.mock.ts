// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /version': (req: Request, res: Response) => {
    res.status(200).send({
      buildDate: '外又这派计年革真界好复增进变府统。',
      compiler: '内消学称边别参术都指广变去持克。',
      gitCommit: '更反变林放上委声转同下表己直全等思团。',
      gitTreeState: '七把信住里他众为治常行深商系报山资。',
      gitVersion: '以严速往义用全解运置必系离济手。',
      goVersion: '华主般济求划此期照毛建些角时维导量。',
      major: '学养心每容社温干需二水根传们开儿。',
      minor: '对青观省产区美县亲写如速观指。',
      platform: '关料指我确权快水天到实积以际列期许马。',
    });
  },
};
