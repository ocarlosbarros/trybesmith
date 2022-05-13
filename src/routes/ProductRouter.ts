import { Router } from 'express';
import { findAll, create } from '../controllers/ProductController';

const ProductRouter = Router();

ProductRouter.get('/', findAll);
ProductRouter.post('/', create);

export default ProductRouter;