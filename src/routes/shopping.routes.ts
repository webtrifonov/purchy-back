import * as express from 'express';
import {getShoppings, createShopping, updateShopping, deleteShopping} from '../controllers/shopping.controller';
import {validateCreateShopping, validateDeleteShopping, validateUpdateShopping} from '../requests/shopping.request';

const router = express.Router();

router.get('/shoppings', getShoppings);
router.post('/create', validateCreateShopping, createShopping);
router.patch('/:id/update', validateUpdateShopping, updateShopping);
router.delete('/:id/delete', validateDeleteShopping, deleteShopping);

export default router;
