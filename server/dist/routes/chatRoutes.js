import { Router } from 'express';
import chatResponse from '../controllers/chatResponseController.js';
const router = Router();
router.get('/respond', chatResponse);
export default router;
