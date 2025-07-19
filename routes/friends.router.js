
import express from 'express';
import friendController from '../controllers/friends.controller.js';


const friendsRouter = express.Router();
friendsRouter.use((req,res,next)=>{
    console.log('ip address:',req.ip);
    next();
})
friendsRouter.post('/',friendController.postFriend );
friendsRouter.get('/',friendController.getFriends);
friendsRouter.get('/:friendId',friendController.getFriend);

export default friendsRouter;
