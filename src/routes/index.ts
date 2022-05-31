import { Router } from 'express';
import ProductRouter from './ProductRouter';
import UserRouter from './UserRouter';

const rootRouter = Router();

rootRouter.use('/products', ProductRouter);
rootRouter.use('/users', UserRouter);

export default rootRouter;
