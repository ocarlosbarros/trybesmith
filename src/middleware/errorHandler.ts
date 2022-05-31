import { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import Joi from 'joi';

type CustomError = {
  name:string,
  details?: Array<Joi.AnySchema>,
};

const errorHandler = async (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { name, details } = error as CustomError;
  switch (name) {
    case 'ValidationError': {
      if (!details) break;
      const statusCode: number = details[0].type === 'any.required' ? 400 : 422; 
      return response.status(statusCode).json({ message: details[0].message });
    }
    default:
      console.error(error);
      response.sendStatus(500);
      break;
  }
  
  next();
};

export default errorHandler;