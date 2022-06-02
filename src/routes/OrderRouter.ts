import { Router } from 'express';
import OrderController from '../controllers/OrderController';
import ensureAuthenticated from '../middleware/ensureAuthenticated';
import validateOrder from '../middleware/validateOrder';

const OrderRouter = Router();

const orderController = new OrderController();

OrderRouter.get('/', orderController.findAll);
OrderRouter.post('/', ensureAuthenticated, validateOrder, orderController.create);

export default OrderRouter;