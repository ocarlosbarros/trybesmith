import { NextFunction, Request, Response } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public findAll = async (_request: Request, response: Response, next: NextFunction) => {
    try {
      const orders = await this.orderService.findAll();
      return response.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  };
}
