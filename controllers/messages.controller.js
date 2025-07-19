import path from 'path';// /folder/files.jpg
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { title } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getMessages (req, res) {
    // res.send('<ul><li>Message</li></ul>');
    // res.sendFile(path.join(__dirname, '..','public', 'images','skimountain.jpg'))
  res.render('messages',{
    title:'Messages to my Friends',
    friend:'elon musk'
  })
}

function postMessages (req, res)  {
    console.log('Updating messages...')
}

export default {
    getMessages,
    postMessages
};