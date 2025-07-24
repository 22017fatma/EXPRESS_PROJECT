
import express from 'express';
import {getFriend,getFriends,postFriend} from '../controllers/friends.controller.js';


const friendsRouter = express.Router();
friendsRouter.use((req,res,next)=>{
    console.log('ip address:',req.ip);
    next();
})
friendsRouter.post('/',postFriend );
friendsRouter.get('/',getFriends);
friendsRouter.get('/:friendId',getFriend);

export default friendsRouter;
