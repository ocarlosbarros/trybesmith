import { Router } from 'express';
import ProductRouter from './ProductRouter';
import UserRouter from './UserRouter';
import OrderRouter from './OrderRouter';
import RegisterRouter from './RegisterRouter';

const rootRouter = Router();

rootRouter.use('/products', ProductRouter);
rootRouter.use('/users', UserRouter);
rootRouter.use('/orders', OrderRouter);
rootRouter.use('/login', RegisterRouter);

export default rootRouter;
