const mongoose = require('mongoose');


const CESSchema = mongoose.Schema({
    p_name:{type: String},
    plan_date: {type: String},
    forcasted_date: {type: String},
    conducted_by: {type:String},
    date_conducted: {type:String},
    date_issued: {type:String},
    client_interviewed: {type:String},
    comments: {type:String},
    submitted: {type:String},
    
},
{
    timestamps: true
  });
  

  const CES = module.exports = mongoose.model('CES',CESSchema);

