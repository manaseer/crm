
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// import express from 'express' ;
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';

const routes = require('./src/routes/crmRoutes');
// import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://myuser:secret@localhost:27017/mydatabase');

//bodyParser setup

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.get('/',(req,res)=>{
  res.send('Node and express server is running on port '+PORT);
});

app.listen(PORT,()=>{
  console.log('Express server is running on '+PORT);
});
