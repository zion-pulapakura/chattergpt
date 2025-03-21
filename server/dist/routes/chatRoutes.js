import { Router } from 'express';
import chatResponseController from '../controllers/chatResponseController.js';
const router = Router();
router.post('/respond', chatResponseController);
export default router;
