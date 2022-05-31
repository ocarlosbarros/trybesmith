import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const validateUser = (request: Request, response: Response, next: NextFunction) => {
  const { username, classe, level, password } = request.body;
  const { error } = userSchema.validate({ username, classe, level, password });
  
  if (error) throw error;
  
  next();
};

export default validateUser;