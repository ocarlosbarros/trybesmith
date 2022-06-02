import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(8).required(),
});

const validateLogin = (request: Request, response: Response, next: NextFunction) => {
  const { username, password } = request.body;
  const { error } = userSchema.validate({ username, password });
  
  if (error) throw error;
  
  next();
};

export default validateLogin;