
import express from 'express' ;

import routes from './src/routes/crmRoutes';

const PORT = 3000;
const app = express();

routes(app);

app.get('/',(req,res)=>{
  res.send('Node and express server is running on port '+PORT);
});

app.listen(PORT,()=>{
  console.log('Express server is running on '+PORT);
});