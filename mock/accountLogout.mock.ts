// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/v1/account/logout': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
