
import express from 'express' ;
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://cms:cms123@ds245548.mlab.com:45548/cms',{useNewUrlParser: true});

//bodyParser setup

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json);

routes(app);

app.get('/',(req,res)=>{
  res.send('Node and express server is running on port '+PORT);
});

app.listen(PORT,()=>{
  console.log('Express server is running on '+PORT);
});