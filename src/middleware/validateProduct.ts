import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const validateProduct = (request: Request, response: Response, next: NextFunction) => {
  const { name, amount } = request.body;
  const { error } = productSchema.validate({ name, amount });
  
  if (error) throw error;
  
  next();
};

export default validateProduct;