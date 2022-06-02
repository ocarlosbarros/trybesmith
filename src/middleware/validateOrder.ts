import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const orderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number()).min(1)
    .message('"productsIds" must include only numbers')
    .required(),
  
});

const validateOrder = (request: Request, response: Response, next: NextFunction) => {
  const { productsIds } = request.body;
  const { error } = orderSchema.validate({ productsIds });
  
  if (error) throw error;
  
  next();
};

export default validateOrder;