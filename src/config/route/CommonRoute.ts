import { Router } from 'express';

import productRoute from '../../product/route/ProductRoute';

const router = Router();

router.use(productRoute);

export default router;
