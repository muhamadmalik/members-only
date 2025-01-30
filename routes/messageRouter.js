import express from 'express';
import { sendMessage, deleteMessage } from '../controllers/messageController.js';

const messageRouter = express();

messageRouter.post('/', sendMessage);
messageRouter.post('/delete-message/:id', deleteMessage)
export default messageRouter;
 