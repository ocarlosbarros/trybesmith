import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import validateProduct from '../middleware/validateProduct';

const ProductRouter = Router();

const productController = new ProductController();

ProductRouter.get('/', productController.findAll);
ProductRouter.post('/', validateProduct, productController.create);

export default ProductRouter;