
import express from 'express' ;
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://cms:cms123@ds245548.mlab.com:45548/cms');

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








import mongoose from 'mongoose';

import {ContactSchema} from '../models/crmModel'

const Contact = mongoose.model('Contact',ContactSchema);

export const addNewContact = (req, res)=>{
  let newContact = new Contact(req.body);
  newContact.save((err, contact)=>{
    if(err){
      res.send(err);
    }
    res.json(contact);
  });
};






// import { runInNewContext } from "vm";
import {addNewContact} from '../controllers/crmController';

const routes = (app)=>{
  app.route('/contact')
  .get((req,res,next)=>{
    console.log(`Request from:${req.originalUrl}`);
    console.log(`Request type:${req.method}`);
    next();
  },(req,res,next)=>{    
    res.send('GET request successfull');
  })
  .post(addNewContact);

  app.route('/contact/:contactId')
  .put((req,res)=>{
    res.send('PUT request successfull');
  })
  .delete((req,res)=>{
    res.send('DELETE request successfull');
  });

}
export default routes;




import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter a first name'
  },
  lastName: {
    type: String,
    required: 'Enter a last name'
  },
  email: {
    type: String
  },
  company: {
    type: String
  },
  phone: {
    type: Number
  },
  created_date:{
    type: Date,
    default: Date.now
  }
});





