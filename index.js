
import express from 'express' ;
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;
console.log('---> 1');

// mongoose connection
mongoose.Promise = global.Promise;
console.log('---> 2');

//bodyParser setup

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json);
console.log('---> 3');

routes(app);
console.log('---> 4');

app.get('/',(req,res)=>{
  res.send('Node and express server is running on port '+PORT);
});
console.log('---> 5');

app.listen(PORT,()=>{
  console.log('Express server is running on '+PORT);
});