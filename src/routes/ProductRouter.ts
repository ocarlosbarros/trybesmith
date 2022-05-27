import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const ProductRouter = Router();

const productController = new ProductController();

ProductRouter.get('/', productController.findAll);
ProductRouter.post('/', productController.create);

export default ProductRouter;