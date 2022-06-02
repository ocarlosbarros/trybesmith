import { Router } from 'express';
import ProductRouter from './ProductRouter';
import UserRouter from './UserRouter';
import OrderRouter from './OrderRouter';

const rootRouter = Router();

rootRouter.use('/products', ProductRouter);
rootRouter.use('/users', UserRouter);
rootRouter.use('/orders', OrderRouter);

export default rootRouter;
