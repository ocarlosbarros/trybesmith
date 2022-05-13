import { Router } from 'express';
import ProductRouter from './ProductRouter';

const rootRouter = Router();

rootRouter.use('/products', ProductRouter);

export default rootRouter;
