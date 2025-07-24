import { AppError } from "../utils/AppError.utils.js";  
function getMessages (req, res,next) {
    try {
    const showMessages=true;
    if(showMessages){
        res.render('messages', {
        title: 'Messages to my Friends',
        friend: 'Elon Musk',
    });
    }else
    throw new AppError('No messages to display', 404);
    }catch (error) {
        next(error);
    }
} 


function postMessages (req, res)  {
    console.log('Updating messages...')
}

export {
    getMessages,
    postMessages
};