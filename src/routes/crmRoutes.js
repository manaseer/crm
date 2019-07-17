// import {addNewContact} from '../controllers/crmController'
const addNewContact = require('../controllers/crmController');
const routes = (app)=>{
  app.route('/')
  .get((req,res,next)=>{    
    res.send('Application is OK');
  });

  app.route('/contact')
  .get((req,res,next)=>{
    console.log(`Request from:${req.originalUrl}`);
    console.log(`Request type:${req.method}`);
    next();
  },(req,res,next)=>{    
    res.send('GET request is successfull');
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
// export default routes;
module.exports=routes;