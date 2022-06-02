import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const OrderRouter = Router();

const orderController = new OrderController();

OrderRouter.get('/', orderController.findAll);

export default OrderRouter;