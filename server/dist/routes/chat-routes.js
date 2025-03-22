import { Router } from 'express';
import chatResponseController from '../controllers/chat-response-controller.js';
const router = Router();
router.post('/respond', chatResponseController);
export default router;
