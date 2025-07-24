
import express from 'express';
import {getMessages,postMessages} from '../controllers/messages.controller.js';



const messagesRouter = express.Router();

messagesRouter.get('/',getMessages);
messagesRouter.post('/',postMessages);

export default messagesRouter;
