import { Router } from 'express';
import { getRegisters, newRegister } from '../controllers/regirstersController.js';
import { tokenMiddleware } from '../middlewares/tokenMiddleware.js';
import { registerMiddleware } from '../middlewares/registerMiddleware.js';

const router = Router();

router.use(tokenMiddleware);

router.get("/get-registers", getRegisters);
router.post("/new-register", registerMiddleware, newRegister);

export default router;