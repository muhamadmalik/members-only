import express from 'express';
import {
  sendMessage,
  deleteMessage,
} from '../controllers/messageController.js';
import isAuthenticated, { isAdmin } from '../auth/authMiddleware.js';

const messageRouter = express();

messageRouter.post('/', isAuthenticated, sendMessage);
messageRouter.post('/delete/:id', isAuthenticated, isAdmin, deleteMessage);
export default messageRouter;
