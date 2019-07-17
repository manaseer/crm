// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const ContactSchema = require('../models/crmModel');

// import {ContactSchema} from '../models/crmModel'

const Contact = mongoose.model('Contact',ContactSchema);

module.exports= addNewContact = (req, res)=>{
  let newContact = new Contact(req.body);
  newContact.save((err, contact)=>{
    if(err){
      res.send(err);
    }
    res.json(contact);
  });
};

