import express from 'express';
import friendsRouter from'./routes/friends.router.js';
import messagesRouter from './routes/messages.router.js';

import path from 'path'; // For serving static files
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
// Set the view engine to Handlebars
app.set('view engine', 'hbs'); 
app.set('views',path.join(__dirname,'views'))

const PORT=3000;

//add middleware
app.use((req,res,next) => {
  const start =Date.now(); 
  next();
  const delta=Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`)
  //actions go here...
});

app.use('/site',express.static(path.join(__dirname,'public'))); // Serve static files from the 'public' directory
// Middleware to parse JSON bodies
app.use(express.json()); 

app.get('/', (req, res) => {
  res.render('index', {
     title: ' My Friend Are Very Clever',
     caption:'let\'s go skiing!',
     });
});

app.use('/friends',friendsRouter);
app.use('/messages',messagesRouter)


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});