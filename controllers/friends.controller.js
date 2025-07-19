
import model from '../models/friends.model.js';
function postFriend(req, res)  {
  //Client error 'bad req'
    if(!req.body.name){
    return res.status(400).json({
    error: 'Missing friend name'
    });
};
    const newFriend = 
    {
    id: model.length,
    name: req.body.name 
    };
    model.push(newFriend);
    res.json(newFriend);
}

function getFriends(req, res) {
    res.json(model);
}
function getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];
    if (friend) {
        res.status(200).json(friend);
    }else{
        res.status(404).json({
        error:'friend does not exist'
        });
    } 
}
export default{
    postFriend,
    getFriends,
    getFriend
};