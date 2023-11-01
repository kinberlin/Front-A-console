import express from 'express';
import { join } from 'path';

const staticMiddleware = express.static(join(__dirname, '..', 'static'));

export default function (req: express.Request, res: express.Response, next: express.NextFunction) {
  staticMiddleware(req, res, next);
}