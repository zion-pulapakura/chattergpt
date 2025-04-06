import {Router} from 'express';
import chatResponseController from '../controllers/chat-response-controller.js';
import createChatController from '../controllers/create-chat-controller.js';

const router = Router();

router.post('/respond', chatResponseController);
router.post('/create', createChatController);

export default router;