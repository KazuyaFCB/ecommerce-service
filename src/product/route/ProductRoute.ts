import express from 'express';
import ProductController from '../controller/ProductController';
import container from '../../config/ioc/InversifyConfig';

const router = express.Router();
const productController = container.resolve(ProductController);

router.post('/create', (req, res, next) => productController.create(req, res, next));

router.use('/api/product', router);

export default router;
