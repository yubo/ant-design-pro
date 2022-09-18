// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/v1/users': (req: Request, res: Response) => {
    res.status(200).send({
      host: '万五关清会气离并识公节选。',
      success: false,
      traceId: '1f7CCced-E728-7bA2-3F51-F30FBfCdcA3A',
    });
  },
};
