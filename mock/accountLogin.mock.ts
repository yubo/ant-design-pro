// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/v1/account/login': (req: Request, res: Response) => {
    res.status(200).send({ currentAuthority: 'guest', type: 1 });
  },
};
