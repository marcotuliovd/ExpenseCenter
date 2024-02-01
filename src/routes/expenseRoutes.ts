import { Router } from 'express';

import validateToken from '../middleware/validateToken';
import { CreateExpense, DeleteExpenseById, FindAllExpense, FindExpenseById, UpdateExpenseById } from '../controllers/expenseController';

const router = Router();

router.post('/', validateToken, CreateExpense);
router.get('/:id', validateToken, FindExpenseById);
router.get('/', validateToken, FindAllExpense);
router.put('/',validateToken, UpdateExpenseById);
router.delete('/:id', validateToken, DeleteExpenseById);


export default router;