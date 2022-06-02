import { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import Joi from 'joi';

type CustomError = {
  name:string,
  details: Array<Joi.AnySchema>,
  message?: string,
};

const handler = async (error: Error, request: Request, response: Response, next: NextFunction) => {
  const { name, details, message } = error as CustomError;
  switch (name) {
    case 'ValidationError': {
      const statusCode: number = details[0].type === 'any.required' ? 400 : 422; 
      return response.status(statusCode).json({ message: details[0].message });
    }
    case 'AuthenticationError': 
      return response.status(401).json({ message });

    case 'JsonWebTokenError': 
      return response.status(401).json({ message: 'Invalid token' });
    default:
      console.error(error);
      response.sendStatus(500);
      break;
  }
  
  next();
};

export default handler;