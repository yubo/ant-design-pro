// @ts-ignore
import { Request, Response } from 'express';

export default {
  'DELETE /api/v1/users/:id': (req: Request, res: Response) => {
    res.status(200).send({
      host: '共政交具把持验动科代空化应。',
      success: true,
      traceId: '7d4e6b66-693a-EFdc-f4Eb-DbB262757324',
    });
  },
};
