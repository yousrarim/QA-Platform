const mongoose = require('mongoose');


const PGCRRSchema = mongoose.Schema({
    p_name:{type: String},
    type:{type: String},
    result:{type: String},
    plan_date: {type: String},
    forcasted_date: {type: String},
    conducted_by: {type:String},
    date_conducted: {type:String},
    date_issued: {type:String},
    comments: {type:String},
    score: {type:Number},
    submitted: {type:String},
},
{
    timestamps: true
  });
  

  const PGCRR = module.exports = mongoose.model('PGCRR',PGCRRSchema);
