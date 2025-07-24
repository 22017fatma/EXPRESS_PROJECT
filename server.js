import express from 'express';
import friendsRouter from'./routes/friends.router.js';
import messagesRouter from './routes/messages.router.js';


import path from 'path'; 
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { AppError } from './utils/AppError.utils.js';
import { customError } from './middlewares/customError.middleware.js';
import dotenv from 'dotenv';   
dotenv.config();

console.log(' ENVIRONMENT:', process.env.NODE_ENV);

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

app.use(express.json()); 


app.get('/', (req, res) => {
  res.render('index', {
     title: ' My Friend Are Very Clever',
     caption:'let\'s go skiing!',
     });
});

app.use('/friends',friendsRouter);
app.use('/messages',messagesRouter)

app.use("/api/*route",(req,res,next)=>{
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});



app.use(customError);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});