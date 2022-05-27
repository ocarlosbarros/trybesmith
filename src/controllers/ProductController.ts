import { NextFunction, Request, Response } from 'express';
import ProductService from '../services/ProductService';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public findAll = async (_request: Request, response: Response, next: NextFunction) => {
    try {
      const products = await this.productService.findAll();
      return response.status(200).json(products);
    } catch (error) {
      next(error);
    }
  };

  public create = (request: Request, response: Response) => {
    const product = request.body;
    console.log(product);
    return response.status(200).json({ message: 'OK' });
  };
}
