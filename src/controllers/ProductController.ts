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

  public create = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const product = request.body;
      const created = await this.productService.create(product);
      return response.status(201).json(created);
    } catch (error) {
      next(error);
    }
  };
}
