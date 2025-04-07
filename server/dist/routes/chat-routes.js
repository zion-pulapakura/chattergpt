import { Router } from 'express';
import chatResponseController from '../controllers/chat-response-controller.js';
import createChatController from '../controllers/create-chat-controller.js';
import getAllChatsController from '../controllers/get-all-chats-controller.js';
const router = Router();
router.post('/respond', chatResponseController);
router.post('/create', createChatController);
router.get('/all-chats', getAllChatsController);
export default router;
