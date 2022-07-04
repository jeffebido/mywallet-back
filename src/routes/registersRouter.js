import { Router } from 'express';
import { getRegisters, newRegister } from '../controllers/regirstersController.js';
import { tokenMiddleware } from '../middlewares/tokenMiddleware.js';

const router = Router();

router.use(tokenMiddleware);

router.get("/get-registers", getRegisters);
router.post("/new-register", newRegister);

export default router;