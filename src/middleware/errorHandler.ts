import { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

const errorHandler = async (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { name, details } = error as any;
  switch (name) {
    case 'ValidationError': {
      console.log(details[0].type);
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