import { NextFunction, Request, Response } from 'express';
import IRequest from '../@types/IRequest';
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

  public create = async (request: IRequest, response: Response, next: NextFunction) => {
    try {
      const { productsIds } = request.body;
      const { userId } = request;
      
      if (!userId) return;
      
      const orders = await this.orderService.create(userId, productsIds);
      return response.status(201).json(orders);
    } catch (error) {
      next(error);
    }
  };
}
