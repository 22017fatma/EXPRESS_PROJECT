import{AppError} from '../utils/AppError.utils.js';
import {friends} from '../models/friends.model.js';
function postFriend(req, res)  {
  //Client error 'bad req'
    if(!req.body.name){
    return res.status(400).json({
    error: 'Missing friend name'
    });
};
    const newFriend = 
    {
    id: friends.length,
    name: req.body.name 
    };
    friends.push(newFriend);
    res.json(newFriend);
}
 
function getFriends(req, res) {
    res.json(friends);
}
function getFriend(req, res,next) {
    try{
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if (friend) {
       return res.status(200).json(friend);
        
    }else
        throw new AppError(`Friend with ID ${friendId} not found`, 404);
        }catch (error) {
        next(error);
        }

    
}





export {
    postFriend,
    getFriends,
    getFriend
};