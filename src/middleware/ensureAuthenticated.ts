import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Response, NextFunction } from 'express';
import IRequest from '../@types/IRequest';
import IPayload from '../intefaces/IPayload';

dotenv.config();

const secret = process.env.JWT_SECRET || '!MoMkVdqx%v49J';

const ensureAuthenticated = (request: IRequest, response: Response, next: NextFunction) => {
  const authtoken = request.headers.authorization;
  if (!authtoken) return response.status(401).json({ message: 'Token not found' });

  try {
    const { id } = jwt.verify(authtoken, secret) as IPayload;
    request.userId = id;
    next();
  } catch (error) {
    next(error);
  }
};

export default ensureAuthenticated;